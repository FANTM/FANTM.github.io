module.exports = {
  siteMetadata: {
    siteUrl: `https://FANTM.github.io`,
    title: "FANTM Documentation",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages/`,
      },
      __key: "pages",
    },
  ],
};
