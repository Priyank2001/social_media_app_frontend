import React from 'react'

function Comment({username,content}) {
  return (
    <div style={{padding:"10px"}}><b>{username}</b> : {content}</div>
  )
}

export default Comment