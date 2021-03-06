import * as React from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const tocQuery = graphql`
  query {
    allTableOfContentsYaml {
      edges {
        node {
          toc
        }
      }
    }
  }
`;

// markup
function NotFoundPage({location}) {
  const data = useStaticQuery(tocQuery);
  const contents = data.allTableOfContentsYaml.edges[0].node.toc;
  console.log("Test!");
  for (let entry in contents) {
    if (entry.toLowerCase() === location.pathname.toLowerCase()) {
      console.log(entry);
      navigate(entry)
      break;
    }
  } 
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? <p>Page not found</p> : null}
        <br />
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
}

export default NotFoundPage;
