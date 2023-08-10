import React, { Component } from 'react'
import { AppBar, TextField, ThemeProvider, createTheme, Box, Toolbar, IconButton, Button, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import { blue } from "@mui/material/colors";
import Typography from '@mui/material/Typography'

export class FromUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    

  render() {
    const { values, handleChange } = this.props;
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
                        User Details
                    </Typography>
                </Toolbar>
              </AppBar>
          </Box>
            <form action="">
            <TextField
                label="First Name"
                variant="filled"
                margin='normal'
                placeholder='First Name'
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                required
                />
            <br />
            <TextField
                label="Last Name"
                variant="filled"
                margin='normal'
                placeholder='Last Name'
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                required
                />
            <br />
            <TextField
                label="E-mail"
                variant="filled"
                margin='normal'
                placeholder='E-mail'
                onChange={handleChange('email')}
                defaultValue={values.email}
                required
            />
            <br />
            <Stack margin={2} direction={'row'} justifyContent={'center'}>
              <Button 
                variant="contained"
                onClick={this.continue}
                >Next
              </Button>
            </Stack>

          </form>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default FromUserDetails