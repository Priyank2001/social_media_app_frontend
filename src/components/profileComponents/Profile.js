import { useEffect, useState } from "react";
// import './Profile.css'
import Context from "../../Context";
import HomeNavBar from "../HomeNavBar";
import ProNav from "./ProNav";
export default function Profile(props) {
  const [user, setUser] = useState(
    window.localStorage.getItem("user") == null
      ? null
      : JSON.parse(window.localStorage.getItem("user"))
  );
  const [feed, setFeed] = useState([]);
  const path = window.location.pathname;
  const path_members = path.split("/");
  const [username, setUsername] = useState(path_members[2]);
  const fetchFeed = async () => {
    try {
      const url = `${Context().backendURL}/user/${username}/posts`;
      await fetch(url, {
        method: "GET",
        headers: {
          currentUserId: user.userId,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setFeed(json);
          // setImagee(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);
  var temp = [];
  for (let i = 0; i < 40; i++) temp.push(0);
  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <HomeNavBar username={username} setUser={setUser} />

      <div style={{ display: "flex", position: "relative" }}>
        <ProNav username={username} setUser={setUser} />
        <div
          className="profilediv"
          style={{
            flex: "0.7",
            display: "grid",
            gridTemplateColumns: " auto auto auto auto",
          }}
        >
          {
            feed.reverse().map((post, index) => {
              return (
                <div
                  key={post.id}
                  style={{
                    height: "200px",
                    width: "200px",
                    backgroundColor: "black",
                    margin: "5px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {post.contentType === "IMAGE" && (
                    <img
                     alt = {post.id}
                      style={{
                        height: "180px",
                        width: "180px",
                        padding: "10px",
                      }}
                      src={post.imageURL}
                    />
                  )}
                  {post.contentType === "TEXT" && (
                    <p style={{ overflow: "hidden", color: "white" }}>
                      {post.text}
                    </p>
                  )}
                </div>
              );
            })}
          
        </div>
      </div>
    </div>
  );
}
