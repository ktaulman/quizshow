import React from 'react';
//Material UI imports
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles,withTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
//import font

import {Link,MemoryRouter} from 'react-router-dom'
import lmRegular from '../../fonts/LEMONMILK-Regular.otf';

const lemonMilkRegular={
  fontFamily:'Lemon Milk',
  fontStyle:'normal',
  fontDisplay:'swap',
  fontWeight:400,
  src:`url(${lmRegular}) format('otf')`
};
//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  link:{
    textDecoration:'none',
    color:'#0B59A2'
  }
}));



function NavBarDropDown(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
   
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {open?<MenuIcon/>:null}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className={classes.menuList}>
                    <MenuItem>
                      <Link className={classes.link} to='/game/'>Start Game</Link>
                    </MenuItem>

                    <MenuItem>
                      <Link className={classes.link} to='/questionboard'>Questionboard</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className={classes.link} to='/leaderboard'>Leaderboard</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className={classes.link} to='/signin'>Sign In</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className={classes.link} to='/register'>Register</Link>
                    </MenuItem>
                   
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>

  );
}

export default withTheme(NavBarDropDown)