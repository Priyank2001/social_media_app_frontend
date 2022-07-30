import "../styles/Post.css";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import Divider from "@mui/material/Divider";
import CommentBox from "./CommentBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Context from "../../Context";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import * as Vibrant from 'node-vibrant'
export default function Post(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [like, changeLikes] = useState({
    likeCount: props.likeCount,
    usersWhoLiked: [],
    isLiked: props.likedByCurrentUser,
  });
  const [commentBox, changeCommentBox] = useState({
    open: false,
    isRendering: false,
    comment_array: [],
  });
  const open = Boolean(anchorEl);

  //*********************************************************************************** */
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };
  const iconStyle = { padding: "15px 10px 15px 15px" };

  // comment_array => {id, timestamp, content , postId, profileHead}
  const action = {
    fetchComments: async () => {
      changeCommentBox((prev) => {
        return {
          ...prev,
          isRendering: true,
        };
      });
      try {
        const url = `${Context().backendURL}/post/${props.postId}/comments`;
        await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            changeCommentBox((prev) => {
              return {
                ...prev,
                isRendering: false,
                comment_array: json,
              };
            });
          });
      } catch (error) {
        console.log("Error while fetching comments", props.postId, error);
      }
    },
    fetchReactors: async (type = "") => {
      const url = `${Context().backendURL}/post/${props.postId}/reactors`;
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          changeLikes((prev) => {
            return {
              ...prev,
              usersWhoLiked: json,
            };
          });
        });
    },
    handleReact: async () => {
      const url = `${Context().backendURL}/post/${props.postId}/react`;
      await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          currentUserId: props.userId,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.status === true) {
            if (like.isLiked) {
              changeLikes((prev) => {
                return {
                  ...prev,
                  isLiked: false,
                  likeCount: like.likeCount - 1,
                };
              });
            } else {
              changeLikes((prev) => {
                return {
                  ...prev,
                  isLiked: true,
                  likeCount: like.likeCount + 1,
                };
              });
            }
          }
        });
    },
    handleEditPost: async () => {
      try {
        const url = `${Context().backendURL}/post/${props.postId}`;
        await fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            currentUserId: props.userId,
            postData: "",
            text: "",
            imageURI: "",
          }),
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      } catch (error) {
        console.log(error);
      }
    },
    handleDeletePost: async () => {
      const url = `${Context().backendURL}/post/${props.postId}`;
      try {
        await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            currentUserId: props.userId,
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
          });
      } catch (error) {
        console.log(error);
      }
    },
  };
  const changeBoxState = (event) => {
    event.preventDefault();
    if (commentBox.open === false) action.fetchComments();
    changeCommentBox((prev) => {
      return {
        open: !prev.open,
      };
    });
  };

  return (
    <div>
      <div className="__post">
        <div className="__postHeader">
          <div className="image-cropper">
            <img
              className="__postHeaderPic"
              src={
                props.displayPictureURI === null
                  ? "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  : props.displayPictureURI
              }
              alt="userDP"
            />
          </div>
          <h5 className="__postHeaderAuthorName">{props.author_name}</h5>
          {(props.editPermission !== undefined ||
            props.deletePermission !== undefined) && (
            <>
              <MoreHorizIcon
                onClick={handleClick}
                style={{ flex: 0.1, paddingRight: "15px" }}
                className="__post_menu"
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {props.editPermission && (
                  <MenuItem
                    onClick={(e) => {
                      handleClose(e);
                      props.setEditPostDetails((prev) => {
                        return {
                          ...prev,
                          cardOpen: true,
                          type: props.type,
                          postId: props.postId,
                        };
                      });
                    }}
                  >
                    Edit Post
                  </MenuItem>
                )}
                {props.deletePermission && (
                  <MenuItem
                    onClick={(e) => {
                      handleClose(e);
                      action.handleDeletePost();
                    }}
                  >
                    Delete Post
                  </MenuItem>
                )}
              </Menu>
            </>
          )}
        </div>
        <Divider />
        {props.type === "image" && (
          <img
            className="__postPicture"
            src={props.postSrc}
            alt={props.postId}
          />
        )}
        {props.type === "text" && (
          <div
            style={{
              margin: "20px",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {props.text}
          </div>
        )}
        <Divider />
        {props.type === "image" && (
          <div className="__post_caption_div">
            <p style={{ padding: "10px" }}>{props.caption}</p>
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          {like.isLiked ? (
            <FavoriteIcon
              className="__like_icon"
              style={{ padding: "15px 10px 15px 15px", color: "red" }}
              onClick={(e) => {
                action.handleReact(e);
              }}
            />
          ) : (
            <FavoriteBorderIcon
              style={iconStyle}
              className="__like_icon"
              onClick={(e) => action.handleReact(e)}
            />
          )}
          {like.likeCount}
          <CommentIcon
            onClick={(e) => changeBoxState(e)}
            style={iconStyle}
            className="__like_icon"
          />
          {props.commentCount}
        </div>

        {commentBox.open ? (
          <CommentBox
            userId={props.userId}
            fetchComments={action.fetchComments}
            postId={props.postId}
            comment_array={commentBox.comment_array}
            author_username={props.activeUsername}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
