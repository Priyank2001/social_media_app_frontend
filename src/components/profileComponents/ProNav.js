import { useState } from "react"
import validator from "validator";
import "./ProNav.css"
export default function ProNav (props){
    const[name,setName]=useState(props.user.name);
    const[username,setUName]=useState(props.user.username);
    const[email,setEmail]=useState(props.user.email);
    const[bio,setBio]=useState("SDE @ OlaElectric");
    const [editp,setEidit]=useState(false);
    const[cdp,setDp]=useState(false)
    const[display_picture,setD_p]=useState("");
    const userid=props.user.id;
    function handleSubmit(event)
    {
        event.preventDefault();
        if (validator.isEmail(email)) {
          
        props.setUser((prevState) => {
            return {
                ...prevState,
                
                username:username,
                email:email,
                name:name

                
            }
        })
        
        var url = "http://localhost:8000/users";
        var data = JSON.stringify({
            id:userid,
            name:name,
            email:email,
            username:username,
            bio:bio
        })
        // console.log(data,url)
        
        try
        {
            // let resJson 
            console.log(data)
            fetch(url,{
            method:'POST',
            body:data
            }).then(response =>  response.json()).then(json => console.log(json));
        }
        catch(err){
            console.log(err);
        }

        setEidit(false);
    }
    else{
       
        alert("Enter Valid Email")
    }

    }
    const actions = (req,event) => {
        event.preventDefault();
        if(req === 1){
            setName(event.target.value)
            
                   }
        if(req === 2){
           setUName(event.target.value)
           
        }
        if(req===3)
        {
            setEmail(event.target.value)
           
        }
        if(req===4)
        {
            setBio(event.target.value)
        }
        
    }
    function   handleChange(event) {
        setD_p(event.target.value);
        

      }
    
    function handleSubmit1(event) {
        event.preventDefault();
        if(validator.isURL(display_picture))
        {
        props.setUser((prevState) => {
            return {
                ...prevState,
                display_picture:display_picture
                
            }
        })
        setD_p("");
        setDp(false)
    }
    else{
        
        alert("Enter valid URL")
    }
      }
    
    
    return (
                <div className="float-container">
                    {cdp===false &&<div className="float-child">
                    
                        <img  className="image" src={props.user.display_picture}></img><br/>
                        <button className="bc1" onClick={()=>setDp(true)}>Change Profile</button>
                    
                    </div>}
                    { cdp===true &&<div className="float-child">
                    <form onSubmit={handleSubmit1}>
        <label>
        Image Url:
          <input type="text" value={display_picture} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

                       
                    </div>
                    }
                  { editp === false && <div className="float-child">
                    <b className="bc">{name}</b><br/>
                    <b className="">{email}</b>
                    <p className="">{bio}</p>
                    <button className="bc1" onClick={()=>setEidit(true)}>Edit Profile</button>
        
                    </div>}

                    {editp===true && <div className="float-child">
                        
                    <form onSubmit={e=>handleSubmit(e)}>
                        <table>
                            <tr>
                                
                                <td className="bc2">Name: </td><td><input type="text" name="name"required value={name } onChange={(e) => actions(1,e)} /> </td>
                                
                                

                            </tr>
                            <tr>
                                
                                <td className="bc2">User Name: </td><td><input type="text" required value={username} onChange={(e) => actions(2,e)} /> </td>
                                
                                

                            </tr>
                            <tr>
                                
                                <td className="bc2">Email: </td><td><input id="1e" type="text" validator="isEmail" required
 value={email}  onChange={(e) => actions(3,e)}/> </td>
                                
                                

                            </tr>
                            <tr>
                                
                                <td className="bc2">Bio: </td><td><input required type="text" value={bio} onChange={(e) => actions(4,e)} /> </td>
                                
                                

                            </tr>
                            
                            
                            <tr>
                              <td></td>  <td><input className="bc" type="submit" value="Update Profile" /></td>
                            </tr>
                        </table>
        
        
        
        
      </form>



                    </div>

                    }
                    
                </div>
                
                
                

            )
}