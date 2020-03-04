import React, {useState} from 'react'
import Banner from './Banner'

const LoadButton=()=>{

    const [state, setState]= useState({
        loaded:false,
        feed:[]
    })

    const loadFeed=() =>{
        setState({...state, preloaded:true})
    }

    if (state.loaded ===false){
        return(
            <button onClick={loadFeed}>Load</button>
        )
     }else{
         return(
            <Banner
            header='Keys to the zimmer'
            photo='https://images.unsplash.com/photo-1542637391-fb139ae0411e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            />
         
     )
    }    
        
        


}

export default LoadButton;
