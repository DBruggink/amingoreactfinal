import React, {useState, useContext} from 'react'
import { Link} from 'react-router-dom'
import Logo from '../AlphaSportBlack.png'
import AppContext from '../AppContext'

const regStyle={
   
    width: '450px',
    margin: 'auto',
    background: '#ffffff',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    padding: '40px 55px 45px 55px',
    borderRadius: '15px',
    transition: 'all .3s',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
     textAlign: 'left'
  }
  const logoStyle ={
      width:'150px',
      alt: '300px',
      marginLeft:'180px'
  }

  const headerStyle={
      marginTop:'-50px'

  }

const Registration=()=>{

    let fullname;
    let email;
    let sports;
    let password;
    let occupation;
    let age;
    let bio;
    let image

    const [globalstate]=useContext(AppContext)

    const [state, setState] = useState(
        {saved: false}
    )

    const sendRegister = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}user/register`, 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                fullname: fullname.value,
                email: email.value,
                sports: sports.value,
                password: password.value,
                occupation: occupation.value,
                age: age.value,
                bio: bio.value,
                image: image.value
            })
        })
        .then(response =>setState({...state, saved: true}))
    }

 
  
  
    if(globalstate.loggedIn === false) {
  return (



    <div className="register" style={regStyle}>
        <form>
                <img src={Logo} style={logoStyle} alt=''/>
                <h3 style={headerStyle}>Sign Up</h3>
                

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="First name" ref={(elem)=>fullname = elem} />
                </div>
                 <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={(elem)=>email= elem}/>
                </div>
                <div className="form-group">
                    <label>Sports (seperated with a comma)</label>
                    <input type="text" className="form-control" placeholder="Enter your prefered sports" ref={(elem)=>sports = elem}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={(elem)=>password = elem} />
                </div>
                <div className="form-group">
                    <label>Occupation</label>
                    <input type="text" className="form-control" placeholder="Enter occupation" ref={(elem)=>occupation = elem}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control" placeholder="Enter age" ref={(elem)=>age = elem}/>
                </div>
                <form action="/user/create">
                    <label for='image'>Select profile Picture:</label>
                    <input type="file"  id='image' name='image' accept='image/*' ref={(elem)=>image = elem} />
                    
                </form>
                <div>
                <label>Bio</label>
                <textarea type='text' className="form-control" placeholder='Tell us about yourself' ref={(elem)=>bio = elem}></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={sendRegister}>Sign Up</button>
               
                <p className="forgot-password text-right">
                    Already registered <Link to='/login'>sign in?</Link>
                </p>
                
            </form>

    </div>
      )
  } else{
     return(<p>Done!</p>)

  }
}

export default Registration;