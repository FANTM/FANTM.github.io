import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* This component is a placeholder for a future feature.
 Right now it just holds up space to make the layout symettrical */
const maxWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: maxWidth,
      flexShrink: 0,
    },
  },
}));

function PageToC() {
  const classes = useStyles();
  return <Box className={classes.root} />;
}

export default PageToC;
