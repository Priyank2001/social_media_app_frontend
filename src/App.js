import Login from './components/Login'
import './App.css';
import { useState } from 'react';
import Home from './components/Home'
function App() {
  const [user,setUser] = useState({
        id : 101,
        name:"Priyank",
        email:"priyank@gmail.com",
        username:'priyank_2k',
        password:'priyank123',
        display_picture:"https://www.lntvglobal.com/media/167114/chrismartin.png?center=0.38461538461538464,0.3904109589041096&mode=crop&width=1060&height=596.jpg"
  })
  //const [user,setUser] = useState(null)
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",height:"100vh"}}>
        {user === null && <Login setUser={setUser} />}
        {user !== null && <Home setUser={setUser} user={user}/>}
    </div>
  );
}

export default App;
