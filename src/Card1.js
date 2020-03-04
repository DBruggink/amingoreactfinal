import React from 'react';


const Card1= (prop)=>{
    const cardStyle={
      "width": '10%',
      'alt': '20%',
      backgroundColor: 'grey'
    }
    const imgStyle={
      alignConent:'center',
      height:'150px'
    }
      return(
      <div className="card" style={cardStyle}>
      <img src={prop.image} className="card-img-top" style={imgStyle} />
      <div className="card-body">
        <h5 className='car-header'>{prop.title}</h5>
        <p className="card-text">{prop.text}</p>
        <a href={prop.href} className="btn btn-primary">{prop.link}</a>
      </div>
    </div>
    ) 
  }

export default Card1;