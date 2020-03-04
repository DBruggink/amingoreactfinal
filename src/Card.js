import React from 'react';

const Card= (prop)=>{
    const cardStyle={
      "width": '10%',
      'alt': '20%',
      backgroundColor: 'grey'
    }
    const imgStyle={
      alignConent:'center'
    }
      return(
      <div className="card" style={cardStyle}>
      <img src={prop.image} className="card-img-top" style={imgStyle} />
      <div className="card-body">
        <h5 className='car-header'>{prop.title}</h5>
        <p className="card-text">{prop.description}</p>
        <a href="#" className="btn btn-primary">{prop.buttonLabel}</a>
      </div>
    </div>
    ) 
  }

export default Card;