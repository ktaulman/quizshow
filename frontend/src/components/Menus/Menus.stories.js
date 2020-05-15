import React from 'react';

//Material UI 
import {Typography} from '@material-ui/core';
import {MemoryRouter} from 'react-router-dom';
import DropDownMenu from './NavBarDropDown';

//Theme Provider 
import StorybookThemeProvider from '../../providers/StorybookThemeProvider'

//START OF STORYBOOK VISUAL TESTING 
export default {
    component: DropDownMenu,
    title: 'Menus',
  };

export const DropMenu=()=>(
    <StorybookThemeProvider>
        <MemoryRouter>
            <Typography variant='h1'>Drop Downs</Typography>
            <Typography>NavBar Menu</Typography>
            <br />
            <DropDownMenu/>
            <hr/>
            <Typography>Game Page View Details</Typography>
        </MemoryRouter>
    </StorybookThemeProvider>
);