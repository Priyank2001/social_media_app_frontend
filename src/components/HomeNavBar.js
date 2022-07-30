import "./styles/HomeNavBar.css"
import { useState } from "react"
import DropDownMenu from "./DropDownMenu"
import Context from "../Context"
export default function HomeNavBar(props){
    const homeNavBarDivStyle = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        height: "10vh",
        width:"100%",
        minHeight:"100px",
        maxHeight:"100px",
        padding:"15px 0px 15px 0px",
        flex:"0.1",
        position:"sticky",
        top:"0",
        backgroundColor:"white",
        zIndex:"999"
    }
    const [user,setUser] = useState(window.localStorage.getItem("user") == null ? null : JSON.parse(window.localStorage.getItem("user")) )

    const url = `${Context().appLogoImageURI}`;
    return (
        <div style={homeNavBarDivStyle}>
            <a href={`${Context().frontendURL}`}>
            <img 
            style={{height:"100px"}}
            src={url}
            alt="123"
            ></img>  
            </a>
            <h3> Social Media </h3>
            <div className="__homeNavBar_user_avatar">
                <div className="__homeNavBar_user_image">
                    <img alt="userDP" src={(user.displayPictureURI === null || user.displayPictureURI === undefined)  ? "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png": user.displayPictureURI}/>
                </div>
                
                <div className="__homeNavBar_username">
                    <DropDownMenu username={user.username} />
                </div>
                
            </div>
        </div>
    )
}