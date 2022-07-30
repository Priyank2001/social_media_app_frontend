import HomeNavBar from "./HomeNavBar"
import Post from "./postComponents/Post"
import Divider from '@mui/material/Divider';
import './styles/Home.css'
import { useState ,useEffect } from "react";
import PositionedMenu from "./PostionedMenu";
import Context from "../Context";
import BasicCard from "./postComponents/BasicCard";
export default function Home(props){

    

    const [editPostDetails,setEditPostDetails] = useState({
        cardOpen:false,
        type:"",
        postId:"",
        text:"",
        caption:"",
        imageURI:""
  })
    
    const [feed,setFeed] = useState({
        postList:[],
        isFetching: true
    });
    
    const fetchFeed = () => {
        
        const url = `${Context().backendURL}/feed`
        fetch(url, {
          method:"GET",
          headers:{
            currentUserId:props.user.userId
          }
        }).then(response => response.json()).then(json => {
          setFeed({
          postList:json,
          isFetching:false
        })})
      
    }
    useEffect(() => {
        fetchFeed()
      
    },[feed] )
    


    return (
        <>
        <PositionedMenu  activeUser={props.user} />
        {editPostDetails.cardOpen ? <div><BasicCard editPostDetails={editPostDetails} setEditPostDetails={setEditPostDetails}/></div>: <></>}
        <div className="__homepage">
            
            <HomeNavBar user={props.user} setUser={props.setUser} />
            <Divider />
            
            <div className="__all_posts" >
            
            {feed.isFetching ? <>...FETCHING</>:
                <>
                {feed.postList.slice(0).reverse().map((item,index)=>{
                    if(item.contentType === "IMAGE")
                    return <Post displayPictureURI={item.profileHead.displayPictureURI}
                    author_name = {item.profileHead.username}
                    key={item.id}
                    type="image"
                    caption={item.imageCaption}
                    postId = {item.id}
                    postSrc={item.imageURL} 
                    userId={props.user.userId}
                    activeUsername={props.user.username}
                    likeCount = {item.likeCount}
                    commentCount = {item.commentCount}
                    timestamp = {item.timestamp}
                    likedByCurrentUser = {item.likedByCurrentUser} 
                    editPermission = {item.editPermission}
                    deletePermission = {item.deletePermission}
                    editPostDetails={editPostDetails}
                    setEditPostDetails={setEditPostDetails}
                    />
                    else 
                    return <Post displayPictureURI={item.profileHead.displayPictureURI}
                    timestamp = {item.timestamp}
                    author_name = {item.profileHead.username}
                    key={item.id}
                    type="text"
                    text={item.text}
                    postId = {item.id}
                    userId={props.user.userId}
                    activeUsername={props.user.username}
                    likeCount = {item.likeCount}
                    commentCount = {item.commentCount}
                    likedByCurrentUser = {item.likedByCurrentUser}
                    editPermission = {item.editPermission}
                    deletePermission = {item.deletePermission}
                    editPostDetails={editPostDetails}
                    setEditPostDetails={setEditPostDetails}
                    />
                })}
                </>
            }
            
            
            </div>
            
        </div>
        </>
    )
}