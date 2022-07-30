import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';    
import Context from "../../Context"
import { useState } from 'react';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard(props) {
  const [user,setUser] = useState(window.localStorage.getItem("user") == null ? null : JSON.parse(window.localStorage.getItem("user")) )

  const handleEditPost = async() => {
    const url = `${Context().backendURL}/post/${props.editPostDetails.postId}`
    // console.log( "1:" ,props.editPostDetails.text , "2 : ",props.editPostDetails.caption)
    try{
      await fetch(url, {
        method:"PUT",
        headers:{
          'Content-type':"application/json"
        },
        body:JSON.stringify({
          currentUserId: user.userId,
          postData: props.editPostDetails.type === "text" ? props.editPostDetails.text : props.editPostDetails.caption,
        })
      }).then(response => response.json()).then(json => {console.log(json);props.setEditPostDetails((prev) => {return {...prev,cardOpen: false}})})
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <Card style={{display:"flex",flexDirection:"column",position:"fixed",top:"50%",padding:"5px",backgroundColor:"#FFE5B4",left:"40%"}} sx={{ minWidth: 275 }}>
      <CardContent style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
      {props.editPostDetails.type === "image" && <TextField id="standard-basic" label="Caption" variant="standard" onChange={(e) => props.setEditPostDetails((prev) => {return {...prev,caption:e.target.value}})   } />}
      {props.editPostDetails.type === "text" && <TextField id="standard-basic" label="Text" variant="standard" onChange={(e) => props.setEditPostDetails((prev) => {return {...prev,text:e.target.value}})      } />}
      </CardContent>
      <CardActions style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
        <Button size="small" onClick={() => handleEditPost()}>Save Edit</Button>
        <Button size="small"onClick={() => props.setEditPostDetails((prev) => {return {...prev,cardOpen: false}})}>Cancel</Button>
      </CardActions>
    </Card>
  );
}
