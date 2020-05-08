import React from 'react';
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        background: '#FFFFFF',
        borderRadius: 3,
        border:'3px #F9B600 solid'
      },
    });


export default function NavBarButton({children}){
    const classes=useStyles();
    return <Button className={classes.root}>{children}</Button>
} 