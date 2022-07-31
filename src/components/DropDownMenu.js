import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Context from "../Context"
export default function DropDownMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const frontendURL = "";

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.username}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e) => {handleClose(e); window.location.assign(`${frontendURL}`) }}>Home</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); window.location.assign(`${frontendURL}/user/${props.username}`) }}>My account</MenuItem>
        <MenuItem onClick={(e) => {handleClose(e); window.localStorage.removeItem("isLoggedIn"); window.location.assign(`${Context().frontendURL}/`)}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
