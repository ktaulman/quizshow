import React from 'react';

//Material UI 
import {Button, Typography, MuiThemeProvider, createMuiTheme,makeStyles, IconButton } from '@material-ui/core';

//Custom Components 
import NavBarLogoButton from './NavBar/NavBarLogoButton';
import NavBarButton from './NavBar/NavBarButton';
import QuestionBoardReportButton from './QuestionBoard/QuestionBoardReportButton';
import QuestionBoardFavoriteButton from './QuestionBoard/QuestionBoardFavoriteButton';
import QuestionBoardDetailsButton from './QuestionBoard/QuestionBoardDetailsButton';

//Theme Imports 
import StorybookThemeProvider from '../../providers/StorybookThemeProvider'


//START OF STORYBOOK VISUAL TESTING 
export default {
    component: Button,
    title: 'Button',
  };
  
  export const allButtons = () => (
        <StorybookThemeProvider>
        <div style={{
                height:'100vh',
                
        }}>
            {/* NAV BAR BUTTONS  */}
            <Typography variant='h3' >NavBar Buttons</Typography>


            <br/>
            <br/>
            <Typography>Logo Home Button</Typography>
            <NavBarLogoButton>QZ</NavBarLogoButton>

            <Typography>Register</Typography>
            <NavBarButton onClick={console.log('Register')}>Register</NavBarButton>

            <Typography>Sign-In</Typography>
            <NavBarButton onClick={console.log('Sign-In')}>Sign-In</NavBarButton>

            <hr/>

            {/* API REQUEST BUTTONS */}
            <Typography variant='h3'>API Request Buttons</Typography>
            <br/>
            <br/>
            <Typography>Submit Button</Typography>
            <Button variant='contained' color="primary">
                Submit 
            </Button>

            <Typography>Sign-In Button</Typography>
            <Button variant='contained' color="primary">
                Sign-In 
            </Button>

            <Typography>Register</Typography>
            <Button variant='contained' color='primary'>
                Register
            </Button>
            
           

            <hr/>
            {/* ROUTER LINK BUTTONS  */}
            <Typography variant='h3'> Router Link Buttons</Typography>
            <br/>
            <br/>
            <Typography>Back Button </Typography>
            <Button variant='contained' color='primary'>
                Back
            </Button>
            <Typography> Start Game</Typography>
            <Button variant='contained' color="primary" size='large'>
                Start Game
            </Button>

            <Typography> Question Board</Typography>
            <Button variant='contained' color="primary">
                Question Board
            </Button>

            <Typography> Leaderboard </Typography>
            <Button variant='contained' color="primary">
                Leaderboard
            </Button>

            <hr/>
            {/* QuestionBoardButtons*/}
        
            <Typography variant='h3'> Question Board Buttons</Typography>
            <br/>
            <QuestionBoardReportButton> Report</QuestionBoardReportButton>
            <br/>
            <QuestionBoardDetailsButton> Details</QuestionBoardDetailsButton>
            <br/>
            <QuestionBoardFavoriteButton>Favorite</QuestionBoardFavoriteButton>
            <br/>
            <br/>
            <Button variant='contained' color='secondary' >Add A Question</Button>
            <hr/>
            <Typography></Typography>
            <IconButton></IconButton>


        </div>
        </StorybookThemeProvider>
    )
  