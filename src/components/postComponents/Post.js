import "../styles/Post.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';
import CommentBox from "./CommentBox";
import { useState } from "react";
import * as Vibrant from 'node-vibrant'
export default function Post(props) {
    const iconStyle={padding:"15px 0px 15px 10px"}
    const [commentBox,changeCommentBox] = useState({
        open:false,
    })
    const [bgColor,setBgColor] = useState("white");
    const changeBoxState = (event) => {
        event.preventDefault();
        changeCommentBox((prev) => {
            return {
                open:!prev.open,
            }
        })
    }
    const changeBgcolor = (event) => {
        event.preventDefault();
        // var img = document.getElementsByClassName("__postPicture");
        
    }
    return (
        <div className="__post" >
            <div className="__postHeader">
            <div className="image-cropper"><img className="__postHeaderPic" src={props.display_picture} alt="userDP" /></div>
                <h5  className="__postHeaderUsername">{props.username}</h5>
            </div>
            <Divider />
                {props.type=="image" && <img onLoad={(e) => changeBgcolor(e)} className="__postPicture" src={props.postSrc} alt={props.postID}  />}
                {props.type=="text" && <div style={{margin:"20px",padding:"15px",borderRadius:"10px",textAlign:"center",backgroundColor:"black",color:"white"}}>
                    {props.text}
                </div>}
            <Divider />
            {props.type=="image" && <div className="__post_caption_div"><p><b>{props.username}:</b> {props.caption}</p></div>}
            <div>
                <FavoriteBorderIcon style={iconStyle} />
                <CommentIcon onClick={(e) => changeBoxState(e)}style={iconStyle}/>
            </div>
            {commentBox.open && <CommentBox />}
        </div>
    );
}