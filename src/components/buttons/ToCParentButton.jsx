import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowDown } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    justifyContent: 'left',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.14)',
    },
  },
});

function ToCParentButton({ content, level, kids, active }) {
  const [expanded, setExpanded] = useState(active);
  const classes = useStyles();
  const theme = useTheme();

  function toggleCategory() {
    setExpanded((prevValue) => !prevValue);
  }

  useEffect(() => {
    setExpanded(active);
    console.log(active);
  }, [active]);

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

ToCParentButton.defaultProps = {
  active: false,
}

ToCParentButton.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  kids: PropTypes.arrayOf(PropTypes.node).isRequired,
};
