import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

import Body from './Body';
import Header from './Header';
import ToC from './ToC';

const theme = createMuiTheme({
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

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  function toggleDrawer() {
    setMobileOpen((prevValue) => !prevValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header toggleDrawer={toggleDrawer} />
        <ToC mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
        <Body>{children}</Body>
      </div>
    </ThemeProvider>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};