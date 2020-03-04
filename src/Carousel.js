import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import AppContext from './AppContext'






const Carousel= ()=>{

    
  const carouselStyle={
   
    width:'90%',
    maxHeight:'px',
    margin:'auto'
  }
   const imgStyle={
     maxHeight:'800px',
     alignItems:'center'
   }
  const headerStyle={
    marginBottom:'350px',
    textShadow: '3px 2px black',
    fontSize:'30px'


  }
  
  const[globalState]=useContext(AppContext)
  
  
  
  return(

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={carouselStyle}>
  <div className="carousel-inner">
  
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Football" style={imgStyle}/>
      <div className="carousel-caption  d-md-block" style={headerStyle}>
    <h5>Welcome</h5>
    <p>Below is a link so you can find out more about us</p>
    <Link to='/about'>
    <button className="btn btn-primary">About us</button>
    </Link>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Mixed Martial Arts" style={imgStyle}/>
      <div className="carousel-caption  d-md-block" style={headerStyle}>
    <h5>Enjoy Sports?</h5>
    <p>Below is a link to the Log in page</p>
    <Link to='/login'>
    <button className="btn btn-primary">Login</button>
    </Link>
    </div>
    </div>
    
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1480099225005-2513c8947aec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1465&q=80" alt="Rugby" style={imgStyle}/>
      <div className="carousel-caption  d-md-block" style={headerStyle}>
    <h5>Why not join a game?</h5>
    <p>Below is a link to your Profile, don't forget to login</p>
   {      
   globalState.loggedIn=== false &&
  
  <Link to={'./login'}>
    <button className="btn btn-primary">Profile</button>
  </Link>
   }
   {
     globalState.loggedIn===true&&
     <Link to={'./profile'}>
    
    <button className="btn btn-primary">Profile</button>
     </Link>
   }
    
    
    
    </div>
    </div>
  </div>
  
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>





    )
}
export default Carousel;