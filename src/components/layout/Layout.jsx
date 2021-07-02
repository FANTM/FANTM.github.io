import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';

import Body from './Body';
import Header from './Header';
import ToC from './ToC';
import DesignSystem from '../../../style/DesignSystem';
import PageToC from './PageToC';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E47AFF',
      dark: '#9f55b2',
      light: '#e994ff',
    },
    secondary: {
      main: '#8a88fc',
      dark: '#605fb0',
      light: '#a19ffc',
    },
  },
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function Layout({ children, location }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  function toggleDrawer() {
    setMobileOpen((prevValue) => !prevValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider
        components={DesignSystem}
      >
        <div className={classes.root}>
          <Header toggleDrawer={toggleDrawer} />
          <ToC mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} location={location}/>
          <Body>{children}</Body>
          <PageToC />
        </div>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any.isRequired,
};
