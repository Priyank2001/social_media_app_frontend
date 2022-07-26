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
        const url = 'http://localhost:8000/signin';
        try{
            const str = `${url}?username=${state.username}&password=${state.password}`;
            fetch(str,{
                method:'GET',
            }).then(response => response.json()).then(json => {
                if(json == null){
                    console.log("Wrong credentials")
                }
                else{
                    setUser(json);
                    // console.log("Logged in")
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