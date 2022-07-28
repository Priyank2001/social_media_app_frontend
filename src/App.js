import Login from './components/Login'
import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import Context  from './Context';
function App() {
  
  // const [user,setUser] = useState({
  //       userID : 1,
  //       name:"Priyank",
  //       email:"priyank@gmail.com",
  //       username:'priyank_2k',
  //       password:'priyank123',
  //       display_picture:"https://www.lntvglobal.com/media/167114/chrismartin.png?center=0.38461538461538464,0.3904109589041096&mode=crop&width=1060&height=596.jpg"
  // })
  const [user,setUser] = useState(null)
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",height:"100vh"}}>
        {user === null && <Login setUser={setUser} />}
        {user !== null && <Home user={user} setUser={setUser} />}
    </div>
  );
}

export default App;
