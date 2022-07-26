import { useState } from "react"

export default function ExisitingUser({setUser}){
    const style= {
        width:"100%",
        padding: "10px 0px 10px 0px",
        border:"none",
        outline:"none",
        textAlign :"center",
        backgroundColor:"lightBlue"
    }
    const [state,setState] = useState({
        username:"",
        password:""
    })
    const handleChange = (event,action)=> {
        event.preventDefault();
        if(action === 0){
            setState((prev) => {
                return {
                    ...prev,
                    username:event.target.value
                }
            })
        }
        if(action === 1){
            setState((prev) => {
                return {
                    ...prev,
                    password:event.target.value
                }
            })
        }
    }
    const handleClick = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/users';
        try{
            const list = fetch(url,{
                method:'GET',
            }).then(response => response.json()).then(json => {
                for(let i in json){
                    
                    if(json[i].username === state.username && json[i].password === state.password){
                        setUser(json[i]);
                        console.log("Logged in")

                    }
                }
            })
            
        }   
        catch(err){
            console.log(err);
        }
    }

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <input onChange={(e) => handleChange(e,0)} style={style}placeholder = "Enter Your Username"></input>
            <input onChange={(e) => handleChange(e,1)} style={style}placeholder = "Enter Your Password" type="password"></input>
            <button onClick={(e) => handleClick(e)} >Log in</button>
        </div>
    )
}