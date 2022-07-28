import { useState } from 'react'
import Comment from './Comment'
import Context from '../../Context';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
        <div style={{alignItems:"center",textAlign:"center",display:"flex",justifyContent:"space-around"}}>
        <div style={{backgroundColor:"white",display:"flex",width:"98%",justifyContent:"space-around",margin:"10px",borderRadius:"20px"}}><input value={inputComment} onChange={(e) => handleChangeValue(e) } style={{outline:"none",width:"80%",border:"none",borderRadius:"15px",padding:"7px",paddingLeft:"10px",margin:"6px"}} 
        placeholder="Enter Your Comment"/>
        <div style={{display:"flex",flex:"0.1",alignItems:"center"}} onClick={(e) => handleCommentPost(e)} ><ArrowBackIcon /></div>
        {/* <button style={{border:"none",margin:"5px"}}onClick={(e) => handleCommentPost(e)}>Post  </button> */}
        </div>
        </div>
    </div>
  )
}

export default CommentBox