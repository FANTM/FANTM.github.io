import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'left',
  },
});

function ToCChildButton({ content, level }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Button
      style={{ paddingLeft: theme.spacing(level * 2) + 16 }}
      className={classes.root}
    >
      {content}
    </Button>
  );
}

export default ToCChildButton;

ToCChildButton.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};
