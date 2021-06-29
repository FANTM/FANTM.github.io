const fs = require('fs');
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const documentationTemplate = require.resolve(
    './src/templates/documentationTemplate.jsx',
  );

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: documentationTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};

exports.onPostBuild = () => {
  fs.writeFileSync(path.resolve('./public/CNAME'), 'docs.getfantm.com');
};

function readTableData() {
  const slugRegex = /slug:.*./
  const tableOfContents = [];
  fs.readdirSync(path.resolve('./src/markdown-pages/')).forEach((fileName) => {
    const fullName = path.resolve(`./src/markdown-pages/${fileName}`);
    const file = fs.readFileSync(fullName, "utf-8");
    // Some really ugly string re-formatting follows
    let fmtName = file.match(slugRegex)[0].split(':')[1].trim().split("'")[1];  // Yeah Im bad for using a regex, I know
    fmtName = fmtName.split('/').map((e) => e.trim()).filter((e) => e).join('/');
    tableOfContents.push(fmtName);
  });
  let yaml = `- toc:\n`
  tableOfContents.forEach((entry) => {
    yaml += `    - ${entry}\n`;
  });
  fs.writeFileSync(path.resolve('./src/data/TableOfContents.yaml'), yaml);
}

exports.onPreBootstrap = () => {
  readTableData();
}