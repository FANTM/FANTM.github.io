import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 'bold',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

function PrimaryButton({ children, className }) {
  const classes = useStyles();
  return (
    <Button
      size="large"
      variant="outlined"
      className={`${classes.root} ${className}`}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PrimaryButton.defaultProps = {
  className: '',
};
