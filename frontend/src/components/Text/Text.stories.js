import React from 'react';
import {Typography} from '@material-ui/core';
import StorybookThemeProvider from '../../providers/StorybookThemeProvider'


export default {
    component:Typography,
    title:'Typography'
}

export const text=()=>(
 <StorybookThemeProvider>
     <Typography>Hello</Typography>
 </StorybookThemeProvider>
)