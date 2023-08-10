import React, { Component } from 'react'
import { AppBar, TextField, ThemeProvider, createTheme, Box, Toolbar, IconButton, Button, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import { blue } from "@mui/material/colors";
import Typography from '@mui/material/Typography'

export class FromPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        Personal Details
                    </Typography>
                </Toolbar>
              </AppBar>
          </Box>
            <form action="">
            <TextField
                label="Occupation"
                variant="filled"
                margin='normal'
                placeholder='Occupation'
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                required
                />
            <br />
            <TextField
                label="State"
                variant="filled"
                margin='normal'
                placeholder='State'
                onChange={handleChange('state')}
                defaultValue={values.state}
                required
            />
            <br />
            <TextField
                label="City"
                variant="filled"
                margin='normal'
                placeholder='City'
                onChange={handleChange('city')}
                defaultValue={values.city}
                required
            />
            <br />
            <TextField
                label="Bio"
                variant="filled"
                margin='normal'
                placeholder='Bio'
                onChange={handleChange('bio')}
                defaultValue={values.bio}
                required
            />
            <br />
            <Stack spacing={3} direction="row" justifyContent="center" margin={3}>
                <Button
                    variant="outlined"
                    onClick={this.back}
                >Back
                </Button>

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

export default FromPersonalDetails