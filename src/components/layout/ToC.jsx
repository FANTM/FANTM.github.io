import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Hidden, Drawer } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';

import ToCParentButton from '../buttons/ToCParentButton';
import ToCChildButton from '../buttons/ToCChildButton';
import LogoButton from '../buttons/LogoButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    borderRight: 'none',
    background: 'rgb(50 50 50)',
    width: drawerWidth,
  },
  spacer: {
    height: '40px',
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

// Uses a tree traversal to convert the entire Table of Contents to JSX
function convertToJSX(nodeName, tree, elementJsx, level, path) {
  // Base Case
  const title = nodeName.replace("-", " ");
  const nodeSet = tree.get(nodeName);
  if (nodeSet.size === 0) {
    elementJsx.push(
      <ToCChildButton
        key={nodeName}
        content={title}
        level={level}
        path={`${path}${nodeName}/`}
      />,
    );
    return elementJsx;
  }
  // Traverse from left to right recursively
  let myKids = [];
  nodeSet.forEach((child) => {
    myKids = convertToJSX(
      child,
      tree,
      myKids,
      level + 1,
      `${path}${nodeName}/`,
    );
  });
  // Visit the actual parent after all of the children are determined.
  elementJsx.push(
    <ToCParentButton
      key={nodeName}
      content={nodeName}
      kids={myKids}
      level={level}
    />,
  );
  return elementJsx;
}

function ToC({ mobileOpen, toggleDrawer }) {
  const [tableOfContentsData, setTableOfContentsData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const data = useStaticQuery(tocQuery);

  useEffect(() => {
    const contents = data.allTableOfContentsYaml.edges[0].node.toc;
    const delimeter = '/';
    const tree = new Map();
    tree.set('root', new Set());
    contents.forEach((element) => {
      const pathPieces = element.split(delimeter);
      pathPieces.forEach((piece, index) => {
        if (index === 0) {
          const parent = tree.get('root');
          const curr = tree.get(piece) || new Set();
          parent.add(piece);
          tree.set('root', parent);
          tree.set(piece, curr);
        } else {
          const parent = tree.get(pathPieces[index - 1]);
          const curr = tree.get(piece) || new Set();
          parent.add(piece);
          tree.set(pathPieces[index - 1], parent);
          tree.set(piece, curr);
        }
      });
    });
    const node = tree.get('root');
    const tempData = [];
    node.forEach((child) => {
      tempData.push(convertToJSX(child, tree, [], 0, '/'));
    });
    setTableOfContentsData(tempData);
  }, [data]);

  let container;

  useEffect(() => {
    container = window !== undefined ? () => window.document.body : undefined;
  }, []);

  const ToCInternals = (
    <>
      <LogoButton />
      <div className={classes.spacer} />
      {tableOfContentsData}
    </>
  );

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
          {ToCInternals}
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
          {ToCInternals}
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
