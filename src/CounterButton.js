import React, {useState} from 'react'

const CounterButton=()=>{
        const [state, setState]=useState(
            {
                count:0
            }
        )
       
        
        const increaseCount=()=>{
                setState({count: state.count +1})
            
            
            

        }

        return(

        <button onClick={increaseCount} className="btn-danger">
            {`Your count: ${state.count}`}
        </button>
        )


    }

export default CounterButton