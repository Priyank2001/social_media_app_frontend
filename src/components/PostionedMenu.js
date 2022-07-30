import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Context from '../Context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';    



//**************************************************************************************** */
export default function PositionedMenu(props) {
    const [addIconMenuState,changeAddIconMenuStyle] = useState({
        
        style:{
        transform:`rotate(0deg)`
        },
        isOpen:false,
    })
    
  const [showCard,changeShowCard] = useState({open:false,type:""});

  const [text, changeText] = useState("");
  const [inputImgUrl, changeInputImgUrl] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if(anchorEl != null) {setAnchorEl(null);}
    else setAnchorEl(event.currentTarget);
    handleAddIconClick()
    
  };
  const handleClose = (key) => {
    
   
    if(key === 1){
      handleAddIconClick()
      setAnchorEl(null);
      changeShowCard({open:true,type:"image"})
    }
    else if(key === 2){
      handleAddIconClick()
      setAnchorEl(null);
      changeShowCard({open:true,type:"text"})
    }
    else{
      setAnchorEl(null);
      handleAddIconClick()
    }
  };
  
  
  const handlePost = async() => {
    if(showCard.type === "image")
    {
      try{
        const url = `${Context().backendURL}/post`
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                contentType: 1 ,
                imageCaption:text,
                imageURL:inputImgUrl,
                authorId:props.activeUser.userId,
                timestamp: new Date().getTime(),    
            })
        }).then(response => response.json()).then(json => console.log(json))
    }
    catch(error){
        console.log("Error while posting post",error)
    }
    }
    else{
      try{
        const url = `${Context().backendURL}/post`
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                contentType: 0 ,
                text:text,
                authorId:props.activeUser.userId,
                timestamp: new Date().getTime(),    
            })
        }).then(response => response.json()).then(json => console.log(json))
    }
    catch(error){
        console.log("Error while posting post",error)
    } 
    }
    changeShowCard((prev) => {
        return {type:"",
        open:false}
    })
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
                    <CardContent style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
                    <TextField id="standard-basic" label="Caption" variant="standard" onChange={(e) => changeText(e.target.value)} />
                    </CardContent>
                    {showCard.type==="image" && <CardContent style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
                    <TextField id="standard-basic" label="Image url" variant="standard" onChange={(e) => changeInputImgUrl(e.target.value)} />    
                    </CardContent>}
                    <CardContent style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
                        <Button onClick={(e) => handlePost()}>Post!</Button>
                        <Button onClick={(e) => changeShowCard((prev) => {return {...prev,open:false}})}>Cancel</Button>
                    </CardContent>
            </Card>
        }
       <div className="__addIcon_div" style={{display:"flex",position:"fixed",bottom:"10%",left:"10%",backgroundColor:"pink",padding:"10px",borderRadius:"25px"}} >
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
        <MenuItem onClick={(e)=>{e.preventDefault();handleClose(1)}}>Picture</MenuItem>
        <MenuItem onClick={(e)=>{e.preventDefault();handleClose(2)}}>Text</MenuItem>
      </Menu>
    </>
  );
}