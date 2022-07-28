import { useState } from 'react'
import LoginNav from './LoginNav'
import NewUser from './NewUser'
import ExisitingUser from './ExisitingUser'
function Login({setUser,changeState,render_state}){
    const [newUser,setNewUser] = useState(1);
    return (
        <div className="__login_box" style={{width:"40vw",display:"flex",flexDirection:"column",margin:"0px",borderRadius:"100px"}}>
            <LoginNav setMode={setNewUser} />
            { 
                newUser === 0 && <NewUser />
            }
            {
                newUser === 1 &&  <ExisitingUser />
            }
        </div>
    )
}
export default Login