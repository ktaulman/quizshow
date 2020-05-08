import React from 'react';
import { action } from '@storybook/addon-actions';
import { MuiThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'


//font imports 
import RedHook from '../fonts/RedHook.otf';
import lmBold from '../fonts/LEMONMILK-Bold.otf';
import lmRegular from '../fonts/LEMONMILK-Regular.otf';
import lmItalics from '../fonts/LEMONMILK-RegularItalic.otf'

//Font Themes 
const lemonMilkBold={
    fontFamily:'Lemon Milk Bold',
    fontStyle:'normal',
    fontDisplay:'swap',
    fontWeight:400,
    src:`url(${lmBold}) format('otf')`
};
const lemonMilkRegular={
    fontFamily:'Lemon Milk',
    fontStyle:'normal',
    fontDisplay:'swap',
    fontWeight:400,
    src:`url(${lmRegular}) format('otf')`
};
const lemonMilkItalic={
    fontFamily:'Lemon Milk Italic',
    fontStyle:'normal',
    fontDisplay:'swap',
    fontWeight:400,
    src:`url(${lmItalics}) format('otf')`
};

const redhook ={
    fontFamily:'Red Hook',
    fontStyle:'normal',
    fontDisplay:'swap',
    fontWeight:400,
    src:`url(${RedHook}) format('otf')`
}

//Theme for Whole Document 
const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#F9B600',
            navBar:'#FFFFFF'
        },
        secondary:{
            main:'#0B59A2'
        },
    },
    typography:{
        fontFamily:'Lemon Milk',
    }
});

export default {
    component:Link,
    title:'Links in project'
}

export const AllLinks=()=>(
    <div>hello there</div>
)