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
        const url = `${Context().backendURL}/comment`
          await fetch(url, {
            method:"POST",
            body:JSON.stringify({
              postId:props.postId,
              content:inputComment,
              authorId:props.userId,
              timestamp:new Date().getTime(),
            }),
            headers:{
              'Content-type':"application/json"
            }
          }).then(response => response.json()).then(json => {if(json.status===true) props.fetchComments();})

      } catch (error) {
          console.log("Error while posting comments at postId",props.postId,error)
      }
      changeValue("")
  }
  return (
    <div className="__comment_box" style={{display:"block"}}>
        {props.comment_array != null && props.comment_array.map((item,index) => { return <Comment key={item.id} username={item.profileHead.username} content={item.content}/>})}
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