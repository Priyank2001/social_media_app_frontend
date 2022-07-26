import "../styles/Post.css"
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';
import CommentBox from "./CommentBox";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import * as Vibrant from 'node-vibrant'
export default function Post(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        event.preventDefault();
      setAnchorEl(null);
    };






    const iconStyle={padding:"15px 0px 15px 10px"}
    const [commentBox,changeCommentBox] = useState({
        open:false,
        commentIDs:props.commentID_Array
    })
    const changeBoxState = (event) => {
        event.preventDefault();
        changeCommentBox((prev) => {
            return {
                open:!prev.open,
            }
        })
    }
    const __post_style ={
        height:"100%",
        position:"absolute",
        backgroundImage:"url(" + props.postSrc + ")",
    }
    return (
        <div>
        {/* <div className="__post_blurredImage" style={__post_style}></div> */}
        <div className="__post" >
            <div className="__postHeader">
            <div className="image-cropper"><img className="__postHeaderPic" src={props.display_picture} alt="userDP" /></div>
                <h5  className="__postHeaderUsername">{props.username}</h5>
                <MoreHorizIcon onClick={handleClick} style={{flex:0.1}} />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            <Divider />
                {props.type==="image" && <img  className="__postPicture" src={props.postSrc} alt={props.postID}  />}
                {props.type==="text" && <div style={{margin:"20px",padding:"15px",borderRadius:"10px",textAlign:"center",backgroundColor:"black",color:"white"}}>
                    {props.text}
                </div>}
            <Divider />
            {props.type==="image" && <div className="__post_caption_div"><p><b>{props.username}:</b> {props.caption}</p></div>}
            <div>
                <FavoriteBorderIcon style={iconStyle} />
                <CommentIcon onClick={(e) => changeBoxState(e)}style={iconStyle}/>
            </div>
            {commentBox.open && <CommentBox />}
        </div>
        </div>
    );
}