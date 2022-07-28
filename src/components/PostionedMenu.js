import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Context from '../Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';    
import FileBase64 from "react-file-base64"
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import { responsiveFontSizes } from '@mui/material';


//**************************************************************************************** */
export default function PositionedMenu(props) {
    const [addIconMenuState,changeAddIconMenuStyle] = useState({
        
        style:{
        transform:`rotate(0deg)`
        },
        isOpen:false,
    })
    
  const [showCard,changeShowCard] = useState({open:false,type:""});
  const [file , setFile ]= useState(null)
  const [text, changeText] = useState("");
  const [inputImgUrl, changeInputImgUrl] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleAddIconClick()
    
  };
  const handleClose = (key) => {
    setAnchorEl(null);
    handleAddIconClick()
    if(key === 1){
        changeShowCard({open:true,type:"image"})
    }
    else{
        changeShowCard({open:true,type:"text"})
    }
  };
  
  const getFiles = (files) => {
    setFile(files)
    console.log(files)
  }
  const handlePost = async(type) => {
    try{
        const url = `${Context().url}/post`
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                content_type: "image" ,
                content:{
                    text:text,
                    imgSrc:inputImgUrl
                },
                userID:props.activeUser.userID,
                timestamp: new Date().getTime(),    
            })
        }).then(response => response.json()).then(json => console.log(json))
    }
    catch(error){
        console.log("Error while posting post",error)
    }
    changeShowCard((prev) => {
        return {...prev,
        open:false}
    })
    props.fetchFeed()
  }
  const handleAddIconClick = (e) => {

        if(addIconMenuState.isOpen === false){

            changeAddIconMenuStyle((prev) => {
                return {...prev,
                    style:{
                       transform:`rotate(45deg)`,transition:"0.3s ease-in-out"
                    },
                    isOpen:true
                }
            })
        }
        else{
            changeAddIconMenuStyle((prev) => {
                return {...prev,
                    style:{
                        transform:`rotate(0deg)`,transition:"0.3s ease-in-out"
                    },
                    isOpen:false
                }
            })
        }
    }

  return (
        <>
        {showCard.open && 
            <Card style={{position:"fixed",top:"50%",padding:"5px",backgroundColor:"#FFE5B4"}} sx={{ minWidth: 275 }}>
                    <CardContent>
                    <TextField id="standard-basic" label="Caption" variant="standard" onChange={(e) => changeText(e.target.value)} />
                    </CardContent>
                    <CardContent>
                    <TextField id="standard-basic" label="Image url" variant="standard" onChange={(e) => changeInputImgUrl(e.target.value)} />    
                    </CardContent>
                    <CardContent style={{diplay:"flex",justifyContent:"space-around"}}>
                        <Button onClick={(e) => handlePost("image")}>Post!</Button>
                    </CardContent>
            </Card>
        }
       <div className="__addIcon_div" style={{display:"flex",position:"fixed",bottom:"10%",left:"10%"}} >
                <AddCircleOutlineIcon style={addIconMenuState.style} fontSize="large" />
                <Button style={{}} onClick={e => handleClick(e)}> Add Post </Button>
        </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={(e)=>handleClose(1)}>Picture</MenuItem>
        <MenuItem onClick={(e)=>handleClose(2)}>Text</MenuItem>
      </Menu>
    </>
  );
}