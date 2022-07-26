import "./styles/HomeNavBar.css"
export default function HomeNavBar(props){
    const homeNavBarDivStyle = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        height: "80px",
        padding:"15px",
        flex:"0.1",
        

    }
    return (
        <div style={homeNavBarDivStyle}>
            <img 
            style={{height:"100%"}}
            src="https://www.hipsthetic.com/wp-content/uploads/2019/04/dotted-instagram-icon.jpg"
            alt="123"
            ></img>  
            <h3 style={{heigh:"100%"}}> Social Media </h3>
            <div className="__homeNavBar_user_avatar">
                <div className="__homeNavBar_user_image">
                    <img  src="https://www.lntvglobal.com/media/167114/chrismartin.png?center=0.38461538461538464,0.3904109589041096&mode=crop&width=1060&height=596"/>
                </div>
                <div className="__homeNavBar_username">   <h5>{props.user.username}</h5>
                        <button onClick={(e) => {e.preventDefault();props.setUser(null);}}>Sign out</button>
                </div>
            </div>
        </div>
    )
}