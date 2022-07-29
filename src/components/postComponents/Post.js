import "../styles/Post.css"
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';
import CommentBox from "./CommentBox";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Context from "../../Context";
import FavoriteIcon from '@mui/icons-material/Favorite';

// import * as Vibrant from 'node-vibrant'
export default function Post(props) {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [likes,changeLikes] = useState({
        likesCount : 0,
        usersWhoLiked: [],
        isLiked: false
    });
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        event.preventDefault();
        setAnchorEl(null);
    };
    const iconStyle={padding:"15px 0px 15px 15px"}
    const [commentBox,changeCommentBox] = useState({
        open:false,
        isRendering: false,
        comment_array:[]
    })
    const action = { 
    fetchComments : async () => {
        
        changeCommentBox((prev) => {return {
            ...prev,
            isRendering:true
        }})
        try {
            const url = `${Context().url}/${props.postID}/get_comment`
            await fetch(url,{
                method:'GET',
                headers:{
                    'Content-type':"application/json"
                }
            }).then(response => response.json()).then(json => {
                changeCommentBox((prev) => {return {
                    ...prev,
                    comment_array:json.comment_arr
                }})
            })
        } catch (error) {
            console.log("Error while fetching comments",props.postID,error);
        }
        
    },
    fetchReactors : async (type = "") => {
        const url = `${Context().url}/post/${props.postID}/reactors`;
        await fetch(url, {
            method:"GET",
            headers:{
                'Content-type':'application/json',
                'userid':props.userID,

            },
        }).then(response => response.json()).then(
            json => {
                changeLikes((prev)=> {return {
                    ...prev,
                    usersWhoLiked:json.reactorList,
                    likesCount:json.reactorList.length,
                    isLiked:json.isLiked
                }})
            }
        )
    }
    ,
    handleReact : async() => {
        const url = `${Context().url}/post/${props.postID}/react`;
        await fetch(url, {
            method:"PATCH",
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                userID:props.userID
            })

        }).then(response => response.json()).then(json => {
            changeLikes((prev) => {
                return {
                    ...prev,
                    likesCount:json.likesCount,
                    isLiked:json.isLiked
                }
            })
        })
    },
    }   
    const changeBoxState = (event) => {
        event.preventDefault();
        action.fetchComments(); 
        changeCommentBox((prev) => {
            return {
                open:!prev.open,
            }
        })
    }
    
    useEffect(() => {
        action.fetchReactors("search")
    },[])
    return (
        <div>
        {/* <div className="__post_blurredImage" style={__post_style}></div> */}
        <div className="__post" >
            <div className="__postHeader">
            <div className="image-cropper"><img className="__postHeaderPic" src={props.display_picture} alt="userDP" /></div>
                <h5  className="__postHeaderAuthorName">{props.author_name}</h5>
                <MoreHorizIcon onClick={handleClick} style={{flex:0.1,paddingRight:"15px"}} className="__post_menu"/>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Report Post</MenuItem>
                </Menu>
            </div>
            <Divider />
                {props.type==="image" && <img  className="__postPicture" src={props.postSrc} alt={props.postID}  />}
                {props.type==="text" && <div style={{margin:"20px",padding:"15px",borderRadius:"10px",textAlign:"center",backgroundColor:"black",color:"white"}}>
                    {props.text}
                </div>}
            <Divider />
            {props.type==="image" && <div className="__post_caption_div"><p style={{padding:"10px"}}>{props.caption}</p></div>}
            <div>
                { likes.isLiked ? <FavoriteIcon  className="__like_icon" style={{padding:"15px 0px 15px 15px",color:"red"}} onClick={(e) => {action.handleReact(e)}}  />: <FavoriteBorderIcon style={iconStyle} className="__like_icon" onClick={(e) => action.handleReact(e)}  />}
                
                <CommentIcon onClick={(e) => changeBoxState(e)}  style={iconStyle} className="__like_icon"/>

            </div>
            <h5 style={{paddingLeft:"20px"}}>{likes.likesCount}{" Likes"}</h5>
            {commentBox.open ?  <CommentBox userID={props.userID} fetchComments={action.fetchComments} postID={props.postID} comment_array={commentBox.comment_array} author_username={props.activeUsername}/> : <></>}

        </div>
        </div>
    );
}