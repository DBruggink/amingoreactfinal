import React, {useState} from 'react'






const EmailSub=()=>{

    const [state, setState]= useState({
        saved:false,
        
    })
    let email;
    const save=()=>{
     /* fetch(`${process.env.REACT_APP_BACKEND_URL}emailsub/create`, 
      {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({             
            email: email.value
              
          })
      })
      .then(response =>setState({...state, saved: true}))
  }*/

  fetch(`${process.env.REACT_APP_BACKEND_URL}emailsub/create`, 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                
                email: email.value,
                
            })
        })
        .then(response =>setState({...state, saved: true}))
    }
    
    

    
   

    
   
    
    


    if(state.saved === false) {
return(

  

<div className="jumbotron">
        <div className="container" style={{maxWwidth: "600px"}}>
          <h1 className="display-4">Hello, Sport Enthusiast</h1>
          <p className="lead">Enter your email below to be included to our email list and recieve our monthly updates and offers!</p>
          <hr className="my-4" />
          <p>Be updated with all posted events that match your interests. You wont regret it! </p>
          <div className="input-group mb-6">
            <input type="text" className="form-control" placeholder="Recipient's Email" aria-label="Recipient's username" aria-describedby="button-addon2" ref={(elem)=>email=elem} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={save}>Save</button>
            </div>
          </div>
        </div>
      </div>



)
    } else {
        return(
         
          <center>
          <div className="alert alert-success" role="alert" >
	You have been successfully subscribed!
</div></center>          
        )
    }
    

    



}








export default EmailSub
