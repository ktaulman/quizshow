import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

import RedHook from '../../../fonts/RedHook.otf';
const redhook ={
    fontFamily:'Red Hook',
    fontStyle:'normal',
    fontDisplay:'swap',
    fontWeight:400,
    src:`url(${RedHook}) format('otf')`
}

const useStyles = makeStyles({
    root: {
        fontFamily:'Red Hook',
        fontSize:"45px",
        color:'#FFFFFF'
      },
    });


export default function NavBarLogoButton(props){
    const classes=useStyles();
    return <Button variant='text' className={classes.root} {...props}></Button>
} 