/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from '@material-ui/core';
import React from 'react';

function Header1(props) {
  return <Typography {...props} variant="h2" />;
}

function Header2(props) {
  return <Typography {...props} variant="h3" />;
}

function Header3(props) {
  return <Typography {...props} variant="h4" />;
}

function Header4(props) {
  return <Typography {...props} variant="h5" />;
}

function Header5(props) {
  return <Typography {...props} variant="h6" />;
}

function Header6(props) {
  return <Typography {...props} variant="p" />;
}

function Paragraph(props) {
  return <Typography {...props} />;
}

const DesignSystem = {
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  p: Paragraph,
};

export default DesignSystem;
