import React, { Component } from 'react'
import { AppBar, ThemeProvider, createTheme, Box, Toolbar, IconButton, Button, List, ListItem, ListItemText, Stack} from '@mui/material'
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
    const { values:{ firstName, lastName, email, occupation, state, city, bio } } = this.props;
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
                        Confirm
                    </Typography>
                </Toolbar>
              </AppBar>
          </Box>
          <List sx={{border:'1px solid blue',margin:'auto', width:500, display:'flex', flexDirection:'column',marginTop:3  }}>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='First Name'
              secondary={firstName}
              />
            </ListItem>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='Last Name'
              secondary={lastName}
              />
            </ListItem>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='E-mail'
              secondary={email}
              />
            </ListItem>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='Occupation'
              secondary={occupation}
              />
            </ListItem>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='State'
              secondary={state}
              />
            </ListItem>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='City'
              secondary={city}
              />
            </ListItem>
            <ListItem sx={{textAlign:'center'}}>
              <ListItemText
              primary='Bio'
              secondary={bio}
              />
            </ListItem>
          </List>
          <Stack spacing={3} direction="row" justifyContent="center" margin={3}>
                <Button
                    variant="outlined"
                    onClick={this.back}
                >Back
                </Button>

                <Button 
                  variant="contained"
                  onClick={this.continue}
                  >Confirm
                </Button>
          </Stack>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default FromPersonalDetails