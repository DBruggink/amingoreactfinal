import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/landingpage'
import Login from './pages/login'
import Navbar from './Navbar'
import Registration from './pages/registration'
import About from './pages/about'
import './App.css'
import AppContext from './AppContext'
import Profile from './pages/profile'
import Footer from './Footer'
import Feed from './pages/feed'




function App() {
 
  
 const[globalState,setGlobalState]=useState(
    {
      loggedIn: sessionStorage.getItem('jwt')?true : false,

     
    }
  )

  return (
    <AppContext.Provider value={[globalState,setGlobalState]}>
<BrowserRouter>
    <div className='App'>
  <Navbar/>
  <Switch>
   
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Registration} />
    <Route path='/about' component={About} />
    <Route path='/profile' component={Profile} />
    <Route path='/feed' component={Feed}/>

  </Switch>
  <Footer/>
    </div>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
