import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Divider, Typography } from '@material-ui/core';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds your post data
  const { frontmatter, body } = mdx;
  return (
    <div>
      <Typography variant="h2">{frontmatter.title}</Typography>
      <Typography variant="h5">{`Last Updated: ${frontmatter.date}`}</Typography>
      <br/>
      <Divider/>
      <br/>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
}

export const pageQuery = graphql` 
  query($slug: String!) {
    site(siteMetadata: {siteUrl: {}, description: {}, title: {}}) {
      siteMetadata {
        siteUrl
      }
    }
    mdx(frontmatter: { slug: {eq: $slug}}) {
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query($slug: String!) {
//     mdx(frontmatter: { slug: { eq: $slug } }) {
//       body
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `;

Template.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
