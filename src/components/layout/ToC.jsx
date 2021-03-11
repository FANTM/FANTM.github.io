import React from 'react';
import PropTypes from 'prop-types';
import { Hidden, Drawer } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

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

function ToC({ mobileOpen, toggleDrawer }) {
  const classes = useStyles();
  const theme = useTheme();
  const data = useStaticQuery(tocQuery);

  const contents = data.allTableOfContentsYaml.edges[0].node.toc;
  console.log(contents);

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="documentation navigation">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          get
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          hey
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ToC;

ToC.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
