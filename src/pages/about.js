import React from 'react'
import ContactForm from '../ContactForm'

function About() {
    
        return (
                <div>
                    <div style={{
                        height: '70vh',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        display: 'table',
                        width: '100%',
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,.7)), url(${require('../bg-masthead.jpg')})`
                    }}>
                        <p style={{
                            display: 'table-cell',
                            verticalAlign: 'middle',
                            textAlign: 'center',
                            color: 'white'
                        }}>
                            We are an on campus sports enthusiasts community where fellow classmates <br></br>
                            can create and organize games from variety of our sports. We help keep track of 
                            all athletes attending, <br></br>so you don't have to worry about the lack of players 
                            showing up. <br></br>Sign up now and create your very first sporting event!

                        </p>
                    
                  
                    
                    </div>

                <ContactForm/>
                        
                </div>
                       
                    
                    )
    }


export default About