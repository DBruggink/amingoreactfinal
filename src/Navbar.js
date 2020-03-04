import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import AppContext from './AppContext'
import Logo from './AlphaSportBlack.png'

const Navbar= ()=>{

  const[globalState,setGlobalState]=useContext(AppContext)
  
  const logOut=()=>{
    sessionStorage.clear();

    setGlobalState(
      {
        ...globalState,
        loggedIn:false
      }
    )
  }

  const logoStyle ={
      width:'150px',
      alt: '300px'
  }
   
  
    return(
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" >
   
  <span className="navbar-brand" href="#">
    <Link to={'/'}><img src={Logo} style={logoStyle} alt=''/></Link>
  
  </span>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to={'/profile'}> <span className="nav-link" href="#">Profile </span></Link>
      </li>
      
      <li className="nav-item">
       <Link to={'/register'}> <span className="nav-link" href="#">Register</span></Link>
      </li>
      
      
      <li className="nav-item">
       <Link to={'/feed'}> <span className="nav-link" href="#">Feed</span></Link>
      </li>
      
      
      <li className="nav-item">
       <Link to={'/about'}> <span className="nav-link" href="/about">About Us </span></Link>
      </li>
      
    </ul>
    
  </div>

  {      
   globalState.loggedIn=== false &&
  
  <Link to={'/login'}>
  <button  className='btn btn-danger' >Log In</button>
  </Link>
   }
   {
     globalState.loggedIn=== true &&
     <Link to='/'>
     <button onClick={logOut}  className='btn btn-danger' >Log Out</button>
     </Link>
   }
</nav>

    )
}

export default Navbar