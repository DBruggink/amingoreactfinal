import React from 'react'

const CardLayout = (prop)=>{
    const style={
        display:'Flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '50px',
        marginLeft:'50%',
        
        textAlign:'center'

        
    
    }
    
    return(
        <div style={style}> 
        {prop.children}

        </div>
    )
}

export default CardLayout;