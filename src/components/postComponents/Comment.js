import React from 'react'

function Comment({username,content}) {
  return (
    <div style={{padding:"5px 0px 5px 15px"}}><b>{username}</b> : {content}</div>
  )
}

export default Comment