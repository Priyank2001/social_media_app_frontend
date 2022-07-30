import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/profileComponents/Header';
import Profile from './components/profileComponents/Profile'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
const isLoggedIn = window.localStorage.getItem("isLoggedIn");
// const user = window.localStorage.getItem("user") === undefined ? {
//   username:""
// }  : JSON.parse(window.localStorage.getItem("user")) 

/// const user = isLoggedIn === "true" ? JSON.parse(window.localStorage.getItem(user)) : null
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path={"/user/:username"} element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
