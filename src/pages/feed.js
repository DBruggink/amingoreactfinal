import React, { useContext } from 'react'

import FeedForm from '../FeedForm'
import LoadFeed from '../LoadFeed'
import AppContext from '../AppContext'


function Feed() {
    const[globalState]=useContext(AppContext)
    if(globalState.loggedIn ===true){
        return (
            <div>
            <FeedForm/>

            
            <LoadFeed/>
                

            </div>
        )}
        else if(globalState.loggedIn===false){
            return(
                <div>
            <FeedForm/>

            
            <LoadFeed/>
                

            </div>

            )
        }
        }
        export default Feed