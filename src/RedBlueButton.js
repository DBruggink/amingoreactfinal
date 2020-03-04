import React, {useState} from 'react'

const RedBlueButton=()=>{
    //Add a state to the RedBlueButton component
    const [state, setState] = useState(                  //useState function returns an Array[]
        {
        label:'blue',
        btnClass:'btn-primary'
        }
        )  

      
        const changeColor = () => {
            if(state.label === "blue") {
                setState({label: "red", btnClass:"btn-danger"})
            } else {
                setState({label: "blue", btnClass:"btn-primary"})
            }
        }
    

    return(
        <button onClick={changeColor} 
        className={`btn ${state.btnClass}`}>
            {state.label}
        </button>
    )

}

export default RedBlueButton;