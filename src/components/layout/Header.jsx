import React from 'react';
import { AppBar, IconButton, Link, SvgIcon, Toolbar } from '@material-ui/core';
import { Menu, GitHub, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: 'linear-gradient(135deg, #E47AFF 30%, #8a88fc 70%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  spacer: {
    flexGrow: 1,
  },
  iconButton: {
    color: 'white',
  },
}));

function Header({ toggleDrawer }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} onClick={toggleDrawer}>
          <Menu />
        </IconButton>
        <div className={classes.spacer} />
        <Link href="https://getfantm.com">
          <IconButton aria-label="FANTM website" className={classes.iconButton}>
            <SvgIcon color="white" stroke="white">
              <path
                id="path4312"
                d="m 19.70605,16.16129 -0.25067,0.25066 m -8.69969,6.27654 -0.58979,0.58979 m 9.54015,-9.54014 -2.67382,2.67381 m -6.27654,3.85381 -3.01252,3.01253 m 11.96288,-11.96289 -5.09655,5.09655 m -3.85381,1.43107 -5.43526,5.43526 m 12.32238,-12.32237 -5.45605,5.45605 m 3.03291,-5.45605 -11.69795,11.69794 m 17.44094,-17.44094 -2.06487,2.06487 m -6.10086,3.67812 -9.27521,9.27521 m 17.44094,-17.44094 -4.48761,4.48761 m -5.71935,3.29662 -7.23398,7.23397 m 15.98665,-15.98665 -5.45605,5.45606 m -3.29663,0.87388 -7.23397,7.23398 m 13.56391,-13.56391 -5.45605,5.45605 m 3.0329,-5.45605 -11.14076,11.14076 m 8.71803,-11.14076 -8.71803,8.71803 m 6.29529,-8.71804 -6.29529,6.29529 m 3.87214,-6.29528 -3.87214,3.87214 m 1.4494,-3.87215 -1.4494,1.44941"
              />
            </SvgIcon>
          </IconButton>
        </Link>
        <Link href="https://github.com/FANTM/fantm.github.io">
          <IconButton aria-label="github" className={classes.iconButton}>
            <GitHub />
          </IconButton>
        </Link>
        <Link href="https://twitter.com/getfantm">
          <IconButton aria-label="twitter" className={classes.iconButton}>
            <Twitter />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
