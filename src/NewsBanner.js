import React, {useState} from 'react'

const NewsBanner=()=>{

    const [state, setState]= useState({
        saved:false,
        
    })

    const save=()=>{
        setState({...state, saved: true})
    }


    if(state.saved === false) {
return(

<div className="jumbotron">
        <div className="container" style={{"max-width": "600px"}}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility for typography and spacing to space content out within the larger container.</p>
          <div className="input-group mb-6">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={save}>Save</button>
            </div>
          </div>
        </div>
      </div>



)
    } else {
        return(
            <div className="jumbotron">
        <div className="container" style={{"max-width": "600px"}}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility for typography and spacing to space content out within the larger container.</p>
          <div className="input-group mb-6">
          <div className="alert alert-success" role="alert" >
	You have been successfully subscribed!
</div>
            </div>
          </div>
        </div>
      

            
        )
    }



}








export default NewsBanner
