import Login from './components/Login'
import './App.css';
import { useState } from 'react';
import Home from './components/Home'
function App() {
  
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  const [user,setUser] = useState(window.localStorage.getItem("user") == null ? null : JSON.parse(window.localStorage.getItem("user")) )
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",height:"100vh"}}>
        {isLoggedIn !== "true" && <Login />}
        {isLoggedIn === "true" && <Home user={user} setUser={setUser} />}
    </div>
  );
}

export default App;
