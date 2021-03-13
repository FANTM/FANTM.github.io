import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const width = 240;

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.toolbar,
}));

function LogoButton() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        alignSelf: 'center',
        paddingTop: `${theme.spacing(1)}px`,
        marginBottom: `-${theme.spacing(1)}px`,
      }}
    >
      <Link to="/">
        <StaticImage
          width={width - 20}
          src="../../images/zebra_fantm_gradient_bluepink.png"
          alt="FANTM"
        />
      </Link>
    </div>
  );
}

export default LogoButton;
