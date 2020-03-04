import React, {useContext} from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../AppContext'
import Logo from '../AlphaSportBlack.png'


function Copyright() {

  
  
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     
        ALPHA SPORT
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
 
    let email, password;

  const[globalState,setGlobalState]=useContext(AppContext)
  
  

  const logIn = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}user/login`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })
    .then(
        (response)=>response.json()
    )
    .then(
        (result)=> {
            // 1. Save the JWT in sessionStorage
            sessionStorage.setItem('jwt', result.token)

            // 2. Set the loggedIn global state to true
            setGlobalState({
                ...globalState,
                loggedIn: true
            })
        }
    )
}
      
      const logoStyle ={
        width:'150px',
        alt: '300px',
        marginRight:'40px'
    }



  return (

    
    
   
    <Grid container component="main" className={classes.root}>
      
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
          <img src={Logo} style={logoStyle} alt=''/>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
          <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={(elem)=>email = elem}/>
                </div>
            <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={(elem)=>password = elem} />
                </div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
      
          
            
            
            <button onClick={logIn} type="submit" className="btn btn-danger btn-block" >Sign In</button>
          
            
            
            
            

            
            
            <Grid container>
              <Grid item xs>
             
              </Grid>
              <Grid item>
                <Link to="./register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}