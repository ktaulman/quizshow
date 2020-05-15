import React from 'react';
//React Router Imports 
import {MemoryRouter,Route,Link} from 'react-router-dom';
//Material UI Imports
import {Box,Grid} from '@material-ui/core'
import StoryBookThemeProvider from '../providers/StorybookThemeProvider';
//QuizShow Components imports
//navbar
import NavBarLogoButton from '../components/Buttons/NavBar/NavBarLogoButton';
import NavBarButton from '../components/Buttons/NavBar/NavBarButton';
import NavBarDropDown from '../components/Menus/NavBarDropDown';

//CSS Stylings 
const style={
    header:{
        backgroundColor:'#0B59A2',
        padding:'10px'
    },
    logo:{
        fontFamily:'Red Hook',
        color:'#FFFFFF',
        fontSize:'4.5rem',
        textDecoration:'none'
    },
    navBarButton:{
        backgroundColor:'#FFFFFF'
    }

}

export default function RouteHome(){
    return(
        <MemoryRouter>
            <StoryBookThemeProvider>
            <Grid 
                container 
                direction='column'
            >

                <Grid 
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='center'
                    alignContent='center'
                    component='header'
                    style={style.header}
                >
                    <Link style={style.logo} to='/'>QZ</Link>

                    <Grid 
                        container
                        justify='space-evenly'
                        sm={6}
                       
                    >
                    <NavBarButton 
                        size='medium' 
                        label='sign-in'
                        style={style.navBarButton}
                    > 
                        Sign-In
                    </NavBarButton>

                    <NavBarButton 
                        size='medium'
                        label='register'
                        style={style.navBarButton}
                    > 
                        Register
                    </NavBarButton>

                    <NavBarDropDown/>
                    </Grid>
                </Grid>
                
                <Grid 
                    item
                >

                </Grid>

            </Grid>
        
        </StoryBookThemeProvider>
        </MemoryRouter>
    )
}