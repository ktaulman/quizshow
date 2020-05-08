import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Typography, MuiThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core';
//Custom Components 
import NavBarButton from './NavBar/NavBarButton';
import QuestionBoardReportButton from './QuestionBoard/QuestionBoardReportButton';
import QuestionBoardFavoriteButton from './QuestionBoard/QuestionBoardFavoriteButton';
import QuestionBoardDetailsButton from './QuestionBoard/QuestionBoardDetailsButton'
//font imports 
import RedHook from '../../fonts/RedHook.otf';
import lmBold from '../../fonts/LEMONMILK-Bold.otf';
import lmRegular from '../../fonts/LEMONMILK-Regular.otf';
import lmItalics from '../../fonts/LEMONMILK-RegularItalic.otf'

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

//individual styles for Button 


//START OF STORYBOOK VISUAL TESTING 
export default {
    component: Button,
    title: 'Button',
  };
  
  export const allButtons = () => (
        <MuiThemeProvider theme={theme}>
        <div style={{
                height:'100vh',
                
        }}>

            {/* NAV BAR BUTTONS  */}
            <Typography>NavBar Buttons</Typography>
            <br/>
            <br/>
            <Typography>Register</Typography>
            <NavBarButton onClick={console.log('Register')}>Register</NavBarButton>

            <Typography>Sign-In</Typography>
            <NavBarButton onClick={console.log('Sign-In')}>Sign-In</NavBarButton>

            <hr/>

            {/* API REQUEST BUTTONS */}
            <Typography>API Request Buttons</Typography>
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
            <Typography>Router Link Buttons</Typography>
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
        
            <Typography>Question Board Buttons</Typography>
            <br/>
            <QuestionBoardReportButton> Report</QuestionBoardReportButton>
            <br/>
            <QuestionBoardDetailsButton> Details</QuestionBoardDetailsButton>
            <br/>
            <QuestionBoardFavoriteButton>Favorite</QuestionBoardFavoriteButton>
            <br/>
            <br/>

             
        </div>
        </MuiThemeProvider>
    )
  