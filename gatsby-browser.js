/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
const React = require('react');
const Layout = require('./src/components/layout/Layout').default;

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
