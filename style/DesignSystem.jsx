/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from '@material-ui/core';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import React from 'react';
import { Link } from 'gatsby';

function Header1(props) {
  return <Typography {...props} variant="h2" id={props.children} gutterBottom/>;
}

function Header2(props) {
  return <Typography {...props} variant="h3" id={props.children} gutterBottom/>;
}

function Header3(props) {
  return <Typography {...props} variant="h4" id={props.children} gutterBottom/>;
}

function Header4(props) {
  return <Typography {...props} variant="h5" id={props.children} gutterBottom/>;
}

function Header5(props) {
  return <Typography {...props} variant="h6" id={props.children} gutterBottom />;
}

function Header6(props) {
  return <Typography {...props} variant="p" gutterBottom/>;
}

function Paragraph(props) {
  return <Typography {...props} gutterBottom />;
}

function InternalLink(props) {
  return <Link to={props.to}>{props.children}</Link>;
}

function Code(props) {
  const { children, className } = props;
  let language = 'javascript'; // Default;
  if (className !== '') {
    const splitClassName = className.split('-');
    if (splitClassName.length > 0) [, language] = splitClassName;
  }
  console.log(language);
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

const DesignSystem = {
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  p: Paragraph,
  code: Code,
  InternalLink: InternalLink
};

export default DesignSystem;
