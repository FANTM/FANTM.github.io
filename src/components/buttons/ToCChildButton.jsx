import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  button: {
    width: '100%',
    justifyContent: 'left',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.14)',
    },
  },
  link: {
    textDecoration: 'none',
  },
});

function ToCChildButton({ content, level, path, active }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Link to={path} partiallyActive={true} activeStyle={{backgroundColor: 'rgba(255, 255, 255, 0.3)', display: 'flex'}} className={classes.link}>
      <Button
        style={{ paddingLeft: theme.spacing(level * 2) + 16 }}
        color={active ? 'secondary' : 'primary'}
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
