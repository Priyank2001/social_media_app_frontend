import HomeNavBar from "./HomeNavBar"
import Post from "./postComponents/Post"
import Divider from '@mui/material/Divider';
import './styles/Home.css'
import { useState ,useEffect } from "react";
import PositionedMenu from "./PostionedMenu";
import Context from "../Context";

export default function Home(props){

    


    
    const [feed,setFeed] = useState({
        postList:[],
        isFetching: true
    });
    
    const fetchFeed = () => {
        const url = `${Context().url}/feed`
        fetch(url, {
          method:"GET"
        }).then(response => response.json()).then(json => {
          setFeed({
          postList:json,
          isFetching:false
        })})
      
    }
    useEffect(() => {
        fetchFeed()
      
    },[feed,feed.isFetching] )
    



    return (
        <>
        <PositionedMenu fetchFeed={fetchFeed} activeUser={props.user} />
        <div className="__homepage">
            
            <HomeNavBar user={props.user} setUser={props.setUser} />
            <Divider />
            
            <div className="__all_posts" >
            
            {feed.isFetching ? <>...FETCHING</>:
                <>
                {feed.postList.slice(0).reverse().map((item,index)=>{
                   
                    if(item.content_type === "image")
                    return <Post display_picture={item.profile_head.display_picture}
                    author_name = {item.profile_head.author_username}
                    key={index + 1}
                    type="image"
                    caption={item.content.text}
                    postID = {item.postID}
                    postSrc={item.content.imgSrc} 
                    userID={props.user.userID}
                    activeUsername={props.user.username}
                    likeCount = {item.likeCount}
                    />
                    else 
                    return <Post display_picture={item.profile_head.display_picture}
                    author_name = {item.profile_head.author_username}
                    key={index + 1}
                    type="text"
                    text={item.content.text}
                    postID = {item.postID}
                    userID={props.user.userID}
                    activeUsername={props.user.username}
                    likeCount = {item.likeCount}
                    />
                })}
                </>
            }
            
            
            </div>
            
        </div>
        </>
    )
}