import { Button, Link, Typography } from '@material-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import '../../style/global.css';
import PrimaryButton from '../components/buttons/PrimaryButton';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  actionButton: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function IndexPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.root}>
      <Typography variant={matches ? 'h2' : 'h3'} gutterBottom>
        Welcome to FANTM's Documentation
      </Typography>
      <Typography>
        We're still working on it so please report any bugs to the issues page
        on this repository. While you're here, check out our website to learn
        about what we're doing, or use the sidebar to read our docs!
      </Typography>

      <GatsbyLink
        style={{ textDecoration: 'none' }}
        to="/arduino/getting-started"
      >
        <PrimaryButton className={classes.actionButton}>
          Get started
        </PrimaryButton>
      </GatsbyLink>
      <Link style={{ textDecoration: 'none' }} href="https://getfantm.com">
        <PrimaryButton className={classes.actionButton}>
          Our Website
        </PrimaryButton>
      </Link>
    </div>
  );
}

export default IndexPage;
