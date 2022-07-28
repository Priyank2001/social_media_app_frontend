import { useState } from 'react'
import Comment from './Comment'
import Context from '../../Context';
function CommentBox(props) {
  const [inputComment,changeValue] = useState("");
  const handleChangeValue = (event) => {
    changeValue(event.target.value)
  }
  const handleCommentPost = async(event) => {

      event.preventDefault();

      if(inputComment === "")return;
      try {
        const url = `${Context().url}/post_comment`
          await fetch(url, {
            method:"POST",
            body:JSON.stringify({
              postID:props.postID,
              text:inputComment,
              author_username:props.author_username,
              timestamp:new Date().getTime(),
              session_key:""
            }),
            headers:{
              'Content-type':"application/json"
            }
          }).then(response => response.json()).then(json => {;props.fetchComments();})

      } catch (error) {
          console.log("Error while posting comments at postID",props.postID,error)
      }
      changeValue("")
  }
  return (
    <div className="__comment_box" style={{display:"block"}}>
        {props.comment_array != null && props.comment_array.map((item,index) => { return <Comment key={index + 1} username={item.author_username} content={item.text}/>})}
        <div style={{textAlign:"center"}}>
        <div><input value={inputComment} onChange={(e) => handleChangeValue(e) } style={{width:"80%",border:"none",borderRadius:"15px",padding:"7px",paddingLeft:"10px",margin:"6px"}} 
        placeholder="Enter Your Comment"/><button onClick={(e) => handleCommentPost(e)}>Post  </button></div>
        </div>
    </div>
  )
}

export default CommentBox