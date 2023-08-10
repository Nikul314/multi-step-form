import React, { Component } from 'react'
import { AppBar, ThemeProvider, createTheme, Box, Toolbar, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import { blue } from "@mui/material/colors";
import Typography from '@mui/material/Typography'

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    

  render() {
    const theme = createTheme({
        palette: {
            primary: {
              main: blue[500],
            },
          },
    })
    
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Box sx={{flexGrow:1}}>
              <AppBar position='static'>
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography width={'100%'} variant='h4' textAlign={'center'}>
                        Success
                    </Typography>
                </Toolbar>
              </AppBar>
          </Box>
          <div>
            <h1>Thank you for your submission</h1>
            <p>You will get an email with further instructions</p>
          </div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default Success