import zIndex from "@mui/material/styles/zIndex";
import "./styles/HomeNavBar.css"
export default function HomeNavBar(props){
    const homeNavBarDivStyle = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        height: "15%",
        width:"100vw",
        padding:"15px",
        flex:"0.1",
        position:"sticky",
        top:"0",
        backgroundColor:"white",
        zIndex:"999"
    }
    const url = "https://icon-library.com/images/instagram-512_62607.png";
    return (
        <div style={homeNavBarDivStyle}>
            <img 
            style={{height:"100%"}}
            src={url}
            alt="123"
            ></img>  
            <h3 style={{height:"100%"}}> Social Media </h3>
            <div className="__homeNavBar_user_avatar">
                <div className="__homeNavBar_user_image">
                    <img alt="userDP" src={props.user.display_picture}/>
                </div>
                <div className="__homeNavBar_username">   <h5>{props.user.username}</h5>
                        <button className="__homeNavBar_signout_button" onClick={(e) => {e.preventDefault();props.setUser(null);}}>Sign out</button>
                </div>
            </div>
        </div>
    )
}