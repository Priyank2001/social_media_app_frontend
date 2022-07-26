import { useState } from "react"


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
        var url = "http://localhost:8000/users";
        var data = JSON.stringify({
            name:state.name,
            email:state.email,
            username:state.username,
            password:state.password
        })
        data = JSON.stringify({
                "name":"Skrillex",
                "email": "eve.holt@reqres.in",
                "password": "pistol",            
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
        </div>
    )

}
export default NewUser