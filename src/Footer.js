import React from 'react'
import Logo from './AlphaSportBlack.png'
import {Link} from 'react-router-dom'

function Footer(){
    
    const footerStyle={
       
        display: 'inline',
        color:'#343a40'
        
        

    }

    const listStyle={
        display: 'inline-block',
       margin: '2em'
    }

    const boxStyle={
         marginTop:'-100px',
        display: 'inline',
        
    }

    const logoStyle ={
        width:'150px',
        alt: '300px',
        marginBottom:'-30px'
    }
    
    
    return(

        
        <div className='footer-navigation-links'style={footerStyle}>
            <img src={Logo} style={logoStyle} alt=''/>
            <div>
            <ul style={boxStyle} >
            <li style={listStyle}><Link to='/'><span >Home</span></Link> </li>
            

            <li style={listStyle}><Link to='/about'><span >About Us</span></Link></li>
            
            <li style={listStyle}><Link to='/profile'><span >Profile</span></Link></li>

            <li style={listStyle}><Link to='/feed'><span >Feed</span></Link></li>
            <li style={listStyle}><Link to='/login'><span >Login</span></Link></li>

            <li style={listStyle}><Link to='/register'><span >Registration</span></Link></li>            
            </ul>
            </div>



        </div>

)
}

export default Footer