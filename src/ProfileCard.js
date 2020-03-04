import React from 'react'

const ProfileCard =()=>{

    const imgStyle={
        maxWidth:'400px',
        maxHeight:'600px',
        marginRight:'10px'
    }

    const profileStyle={
           marginTop:'50px',
           marginLeft:'400px'
    }

    const paraStyle={
        fontWeight:'bold',
        fontSize:'30px',
        maxFontSize:'50px'
    }

    const columnStyle={
        backgroundColor:'grey'

    }

    const bioStyle={
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        color: 'white'
    }


    return(
        <div className="row"  style={profileStyle}>
            <div className="column" style={columnStyle}>
            <img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' style={imgStyle} alt=''/>
            <br/>
            <p style={paraStyle}>JEFFY JEFFERTON</p>
            </div>
            <div className="column" style={columnStyle}> 
            <p style={bioStyle}>
                            We are an on campus sports enthusiasts community where fellow classmates <br></br>
                            can create and organize games from variety of our sports. We help keep track of 
                            all athletes attending, <br></br>so you don't have to worry about the lack of players 
                            showing up. <br></br>Sign up now and create your very first sporting event!
                        </p>
                        <p>Occupation</p>
                        <p>Age</p>
                        <p>Sports</p>
            </div>





        </div>






    )


}

export default ProfileCard