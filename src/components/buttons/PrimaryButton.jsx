import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
  },
}));

function PrimaryButton({ children }) {
  const classes = useStyles();
  return <Button className={classes.root}>{children}</Button>;
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};
