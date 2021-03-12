import { Button, Link, Typography } from '@material-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import '../../style/global.css';
import PrimaryButton from '../components/buttons/PrimaryButton';

function IndexPage() {
  return (
    <div>
      <Typography variant="h2">Welcome to FANTM's Documentation</Typography>
      <Typography>
        We're still working on it so please report any bugs to the issues page
        on this repository. While you're here, check out our website to learn
        about what we're doing, or use the sidebar to read our docs!
      </Typography>
      <Link style={{ textDecoration: 'none' }} href="https://getfantm.com">
        <PrimaryButton>Our Website</PrimaryButton>
      </Link>
      <GatsbyLink
        style={{ textDecoration: 'none' }}
        to="/arduino/getting-started"
      >
        <Button>Get started</Button>
      </GatsbyLink>
    </div>
  );
}

export default IndexPage;
