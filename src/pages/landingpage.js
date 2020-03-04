import React from 'react';


import Banner from '../Banner';


import Carousel from '../Carousel'






import EmailSub from '../EmailSub'







function Home() {
  
  
   return (
    
    <div className="App">
     
     
     <EmailSub/>
    
     <Banner
        header='Alpha Sport'
        photo='https://cdn.pixabay.com/photo/2017/08/24/21/41/tartan-track-2678543_960_720.jpg'
        />
     
    
     <Carousel/>
     

    
    
     
   
 
        
     
        
        
        
        
     
        
       
    </div>
  );
}

export default Home;
