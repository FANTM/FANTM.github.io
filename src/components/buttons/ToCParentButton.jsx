import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowDown } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    justifyContent: 'left',
    width: '100%',
  },
});

function ToCParentButton({ content, level, kids }) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  function toggleCategory() {
    setExpanded((prevValue) => !prevValue);
  }

  return (
    <>
      <Button
        className={classes.root}
        style={{ paddingLeft: theme.spacing(level * 2) + 8 }}
        onClick={toggleCategory}
        startIcon={expanded ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
      >
        {content}
      </Button>
      <Collapse in={expanded}>{kids}</Collapse>
    </>
  );
}

export default ToCParentButton;

ToCParentButton.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  kids: PropTypes.arrayOf(PropTypes.node).isRequired,
};
