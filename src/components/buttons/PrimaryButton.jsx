import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
  },
}));

function PrimaryButton() {
  const classes = useStyles();
  return <Button className={classes.root}>text</Button>;
}

export default PrimaryButton;
