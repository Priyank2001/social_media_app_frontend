import React from 'react'

function Comment({username,content}) {
  return (
    <div><b>{username}</b> : {content}</div>
  )
}

export default Comment