import { useState } from "react"
import Context from "../Context"

function NewUser(){
    const style= {
        width:"100%",
        padding: "10px 0px 10px 0px",
        border:"none",
        outline:"none",
        textAlign :"center",
        backgroundColor:"lightBlue",
        borderRadius:"0px"
    }
    const [state,setState]= useState({
        name:"",
        username:"",
        password:"",
        re_password:"",
        matching_password: true,
    })
    const stateChangeRequest = ['Change Name','Change Username','Change Password','Change Repassword', 'Change Email']
    const [error,setError] = useState({
        found:false,
        message:""
    });
    const actions = (req,event) => {
        event.preventDefault();
        if(req === stateChangeRequest[0]){
            setState((prevState) => {
                return {
                    ...prevState,
                    name:event.target.value
                }
            })
        }
        if(req === stateChangeRequest[1]){
            setState((prevState) => {
                return {
                    ...prevState,
                    username:event.target.value
                }
            })
        }
        if(req === stateChangeRequest[2]){
            setState((prevState) => {
                return {
                    ...prevState,
                    password:event.target.value
                    
                }
            })
        }
        if(req === stateChangeRequest[3]){
            setState((prevState) => {
                return {
                    ...prevState,
                    re_password:event.target.value
                }
            })
        }
        if(req === stateChangeRequest[4]){
            setState((prev)=> {
                return {
                    ...prev,
                    email:event.target.value
                }
            })
        }
    }
    const submitData = (event) => {
        event.preventDefault();
        
        if(state.password !== state.re_password){
            setState((prev) => {
                return {
                    ...prev,
                    matching_password: false
                }
            })
            return ;
        }
        else{
            setState((prev) => {
                return {
                    ...prev,
                    matching_password: true
                }
            }) 
        }
        

        try
        {
            // let resJson 
            const url = `${Context().url}/signup`
            fetch(url,{
            method:'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
                name:state.name,
                email:state.email,
                username:state.username,
                password:state.password
            })
            
            }).then(response =>  response.json()).then(json => {
                if(json.status === false){
                    setError({
                        found: true,
                        message:json.message
                    })
                }
                else{
                    setError({
                        found: false,
                        message:""
                    })
                    window.localStorage.setItem("isLoggedIn",true)
                    window.localStorage.setItem("user",JSON.stringify(json))
                    window.location.reload();
                }
            });
        }
        catch(err){
            console.log(err);
        }
        
    }
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <input style={style} onChange={(e) => actions(stateChangeRequest[0],e)} placeholder = "Enter Your Name"></input>
            <input style={style} onChange={(e) => actions(stateChangeRequest[1],e)} placeholder = "Enter Username"></input>
            <input style={style} onChange={(e) => actions(stateChangeRequest[4],e)} placeholder = "Email"></input>
            <input style={style} onChange={(e) => actions(stateChangeRequest[2],e)} placeholder = "Enter Your Password" type="password"></input>
            <input style={style} onChange={(e) => actions(stateChangeRequest[3],e)} placeholder = "Re enter Your Password" type="password"></input>
            {state.matching_password === false && <h6>Password not matching</h6>}
            <button onClick={(e) => submitData(e)} style={{border:"none",padding:"15px"}}>Submit</button>
            {error.found && <h4>{error.message}</h4>}
        </div>
    )

}
export default NewUser