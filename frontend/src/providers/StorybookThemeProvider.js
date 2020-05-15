//react
import React from 'react';
//Material UI Imports 
import {MuiThemeProvider, createMuiTheme, ThemeProvider} from '@material-ui/core';
//font imports 
import RedHook from '../fonts/RedHook.otf';
import lmBold from '../fonts/LEMONMILK-Bold.otf';
import lmRegular from '../fonts/LEMONMILK-Regular.otf';
import lmItalics from '../fonts/LEMONMILK-RegularItalic.otf';




export default function StoryBookThemeProvider ({children}){ 

//Font Themes 
const laSolid={

}
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
            navBar:'#FFFFFF',
        },
        secondary:{
            main:'#0B59A2'
        },
    },
    typography:{
        fontFamily:'Lemon Milk',
    },
    overrides:{
        MuiGrid:{
            root:{
            },

        },
        MuiButton:{
            root:{
                minHeight:'30px',
                "&:hover":{
                    backgroundColor:'inherit',
                    textDecoration:'underline',
                    color:'primary'
                }
            },
            label:{
                lineHeight:'0',
                margin:'5px'
            },
            text:{
                padding:'0 10px'
            }
          
        }
    }
    
});


    return(
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}