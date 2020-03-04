import React from 'react';

import CounterButton from './CounterButton'


const FeedCard= (prop)=>{
    const cardStyle={
      width: '1000px',
      alt: '700px',
      backgroundColor: 'grey',
      align:'center',
      marginLeft:'-480px'
    }
    const imgStyle={
        width:'100px',
        height:'100px',
        
    }

    const postStyle={
      marginTop:'-50px'
    }

    const headerStyle={
      fontWeight:'bold',
      
      fontSize:'large'
    }


   
      return(
        <div>
      <div className="card" style={cardStyle}>
      <img src={prop.image}  style={imgStyle} alt='' />
      <div className="card-body" style={postStyle} >
        <h5 className='car-header'style={headerStyle}>{prop.fullname}</h5>
        <p className="card-text" >{prop.description}</p>
        <p className="card-text">{prop.hashtags}</p>
          
            <p className="card-text">{prop.date}</p>
        <br/>
            <p className="card-text">{prop.emirate}</p>
      </div>
</div>
<CounterButton/>

      </div>
    
    ) 
  }

export default FeedCard;