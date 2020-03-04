import React from 'react'
const ContactForm=()=>{
    
    

      const containerStyle={
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        flex: '1',
        flexDirection:'column',
        alignItems: 'center',
        
    
      }
    
    
    return(
<section className="mb-4">




<div className="row" style={containerStyle}>

    
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        <div>
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        </div>
            
            <div className="row">
      
       
<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
               
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input placeholder='Name' type="text" id="name" name="name" className="form-control"/>
                    </div>
                </div>
                <br></br>
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input placeholder='Email' type="text" id="email" name="email" className="form-control"/>
                        
                    </div>
                
                </div>
                <br></br>
            </div>
            <br></br>
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input placeholder='Subject' type="text" id="subject" name="subject" className="form-control"/>
                        
                    </div>
                </div>
                <br></br>
            </div>
            <br></br>
            <div className="row">

                
                <div className="col-md-12">

                    <div className="md-form">
                        <textarea placeholder='Message' type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    </div>

                </div>
            </div>
            <label for="country">Country</label>
            <select id="country" name="country">
            <option value="Dubai">Dubai</option>
            <option value="Sharjah">Sharjah</option>
            <option value="RAK">RAK</option>
            <option value="Ajman">Ajman</option>
            <option value="FUJ">FUJ</option>
            </select>
           

        </form>

        <div className="text-center text-md-left">
            <button className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</button>
        </div>
        <div className="status"></div>
    </div>
    

    
    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>
    

</div>

</section>




    )




}
export default ContactForm