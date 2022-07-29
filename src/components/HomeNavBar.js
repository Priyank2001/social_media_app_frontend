import "./styles/HomeNavBar.css"
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

    const url = "https://icon-library.com/images/instagram-512_62607.png";
    return (
        <div style={homeNavBarDivStyle}>
            <img 
            style={{height:"100px"}}
            src={url}
            alt="123"
            ></img>  
            <h3> Social Media </h3>
            <div className="__homeNavBar_user_avatar">
                <div className="__homeNavBar_user_image">
                    <img alt="userDP" src={(props.user.displayPictureURI === null || props.user.displayPictureURI === undefined)  ? "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png": props.user.displayPictureURI}/>
                </div>
                <div className="__homeNavBar_username">   <h5>{props.user.username}</h5>
                        <button className="__homeNavBar_signout_button" onClick={(e) => {e.preventDefault();window.localStorage.removeItem("isLoggedIn");window.localStorage.removeItem("user");props.setUser(null);}}>Sign out</button>
                </div>
            </div>
        </div>
    )
}