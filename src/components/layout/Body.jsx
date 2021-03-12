import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  spacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
}));

function Body({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.spacer} />
      {children}
    </main>
  );
}

export default Body;

Body.propTypes = {
  children: PropTypes.node.isRequired,
};
