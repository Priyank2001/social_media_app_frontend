import { useState } from 'react'
import LoginNav from './LoginNav'
import NewUser from './NewUser'
import ExisitingUser from './ExisitingUser'
function Login({setUser}){
    const [newUser,setNewUser] = useState(0);
    return (
        <div className="__login_box" style={{width:"40vw",display:"flex",flexDirection:"column",margin:"0px",borderRadius:"100px"}}>
            <LoginNav setMode={setNewUser} />
            { 
                newUser === 0 && <NewUser />
            }
            {
                newUser === 1 &&  <ExisitingUser setUser={setUser} />
            }
        </div>
    )
}
export default Login