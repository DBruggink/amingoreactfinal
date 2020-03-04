import React, { useState, useContext } from 'react';
import AppContext from './AppContext'
import CardLayout from './CardLayout';
import FeedCard from './FeedCard.js';

const LoadFeedButton = () => {
    //Global State
    const[globalState]=useContext(AppContext)
    //Local State
    const [state, setState] = useState(
        { feed: [] }
    )

    const buttonStyle={
        marginTop:'-100px'
    }

    const loadFeed = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}feed/all`)
        .then(response => response.json())
        .then(json=> {
            setState(
                {
                    ...state,
                    feed: json.results
                }
            )
        })
        
    }

    if(globalState.loggedIn  === false){
        return(
            <div style={buttonStyle}>
                You need to be logged in.
            </div>
        )
    }

    else if(state.feed.length === 0) {
        return (
            <button onClick={loadFeed} style={buttonStyle} className='btn btn-danger'>Load Feed</button>
        )
    } else {
        return (

            <CardLayout>
                {
               state.feed.map(
                    (item)=>
                    <FeedCard 
                        fullname={item.fullname}
                        image={item.image}
                        hashtags={item.hashtags}
                        description={item.description}
                        emirate={item.emirate}
                        date={item.date}
                    />
                )
                }
           </CardLayout>

        )
    }
}

export default LoadFeedButton;