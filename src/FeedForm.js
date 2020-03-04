import React, {useState} from 'react'


const formStyle={
    backgroundColor:'grey',
    marginBottom:'100px'

}

const buttonStyle={
    marginBottom:'25px'
}

const imgStyle={
    width:'100px',
    height:'100px',
    marginLeft:'-1010px'

}

const selectStyle ={
    marginBottom:'25px'
}

const FeedForm= (prop)=>{

    

    let description;
    let emirate;
    let hashtags;
    let image


    const [state, setState] = useState(
        {saved: false}
    )

    const sendFeed = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}feed/create`,
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                description: description.value,
                emirate: emirate.value,
                hashtags: hashtags.value,
                image: image.value
            })
        })
        .then(response =>setState({...state, saved: true}))
    }

    

    

    
    if(state.saved === false) {
    return(
        <div className="container feed-form" style={formStyle}>
            <form>
                <div className="form-group">
                    <img src={prop.image} style={imgStyle} alt=''/>
                    <div>
                <label>Write your post!</label>
                
                <textarea type='text' className="form-control" placeholder='Post' ref={(elem)=>description = elem}></textarea>
                
                </div>
                </div>
                <div>
                
                    <input type="text" className="form-control" placeholder="Enter Hashtags" ref={(elem)=>hashtags = elem}/>
                </div>
                <form action="/user/create">
                    <label for='image'>Upload a picture:</label>
                    <input type="file"  id='image' name='image' accept='image/*' ref={(elem)=>image = elem} />
                    
                </form>
                
                <br/>
                <div>
                <select id="country" name="country" style={selectStyle} ref={(elem)=>emirate = elem}>
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah">Sharjah</option>
            <option value="Ajman">Ajman</option>
            <option value="Fujairah">Fujairah</option>
            <option value="Ras al Khaimah">Ras al Khaimah</option>
            </select>
            </div>
            <br/>
                <button style={buttonStyle} 
                    type="submit" 
                    className="btn btn-danger" onClick={sendFeed}>
                        Post
                </button>
              
            </form>
        </div>
    )
}
else{
    return(
<div className="container feed-form" style={formStyle}>
            <form>
                <div className="form-group">
                    <img src={prop.image} style={imgStyle} alt=''/>
                    <div>
                <label>Want to post another?</label>
                <textarea type='text' className="form-control" placeholder='Post' ref={(elem)=>description = elem}></textarea>
                </div>
                </div>
                
                <br/>
                <div>
                <select id="country" name="country" style={selectStyle} ref={(elem)=>emirate = elem}>
            <option value="australia">Dubai</option>
            <option value="canada">Abu Dhabi</option>
            <option value="usa">Sharjah</option>
            <option value="usa">Ajman</option>
            <option value="usa">Fujairah</option>
            <option value="usa">Ras al Khaimah</option>
            </select>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary btn-block" onClick={sendFeed}>Post!</button>
            </form>
        </div>



    )



}
}


export default FeedForm