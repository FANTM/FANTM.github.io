import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  button: {
    width: '100%',
    justifyContent: 'left',
  },
  link: {
    textDecoration: 'none',
  },
});

function ToCChildButton({ content, level, path }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Link to={path} className={classes.link}>
      <Button
        style={{ paddingLeft: theme.spacing(level * 2) + 16 }}
        className={classes.button}
      >
        {content}
      </Button>
    </Link>
  );
}

export default ToCChildButton;

ToCChildButton.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
};
