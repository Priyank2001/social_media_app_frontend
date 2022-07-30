import {useState} from 'react'
import AdminNavBar from './AdminNavBar'
export default function AdminPage(props){
    const [user,setUser] = useState(window.localStorage.getItem("user") == null ? null : JSON.parse(window.localStorage.getItem("user")) )
    const role = "ADMIN"
    var temp = [];
    return (<div style={{height:"100vh"}}>
        {role === "ADMIN" ? <div>
            <AdminNavBar />
            <></>
        </div>:<>Admin Previleges are not availabe to your user</>} 
    </div>)
}