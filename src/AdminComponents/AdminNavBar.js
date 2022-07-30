import Context from "../Context"
import "./styles/AdminNavBar.css"
import {useState} from "react"
export default function AdminNavBar(){
    const [user,setUser] = useState(window.localStorage.getItem("user") == null ? null : JSON.parse(window.localStorage.getItem("user")) )

    return (<div className="__adminNavBar">
        <img className="__adminNavBarLogo" src={`${Context().appLogoImageURI}`} alt="AppLogo"></img>
        <h3>User's List</h3>
        <h3>All Posts</h3>
        <div>
            <img className="__adminAvatarPic" src={user.displayPictureURI}></img>
        </div>
    </div>)
}