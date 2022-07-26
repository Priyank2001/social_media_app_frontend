import Comment from './Comment'

function CommentBox() {
  return (
    <div className="__comment_box" style={{display:"block"}}>
        <Comment username="sands" content="Aur bhai Priyank"/>
        <div style={{textAlign:"center"}}>
        <input style={{width:"95%",border:"none",borderRadius:"5px",padding:"6px",margin:"6px"}} placeholder="Enter Your Comment"/>
        </div>
    </div>
  )
}

export default CommentBox