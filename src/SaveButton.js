import React, {useState} from 'react'

const SaveButton = (prop)=>{
const [state, setState]= useState(
    {saved:false}
    )

    const save= ()=>{
        setState({...state, saved: true})

    }

    return(
       
        <button
        onClick={save}
        disabled={false}
        width={prop.width}
        className={'btn btn-primary' + prop.className}>
            {prop.label}
        </button>
      


    )


}

export default SaveButton