
import { useEffect, useState } from "react";
// import './Profile.css'
import Context from "../../Context"
import HomeNavBar from "../HomeNavBar";
import ProNav from "./ProNav"
export default function Profile (props){
    let [Imagee, setImagee] = useState(null)
    const [user,setUser] = useState(window.localStorage.getItem("user") == null ? null : JSON.parse(window.localStorage.getItem("user")) )

    const [feed,setFeed] = useState([]);
    // 3. Create out useEffect function

    const fetchFeed = async() => {
      try
      { 
        const url = `${Context().url}/user/${user.username}/posts`;
        await fetch(url,{
          method:"GET",
          headers:{
            currentUserId:user.userId
          },
        }).then(response =>response.json()).then(json => {
            setFeed(json);
            setImagee(true);
        });}
        catch(error){
          console.log(error);
        }

    }
  useEffect(() => {
      fetchFeed();
  },[])
  
  return (
    <div style={{position:"relative",display:"flex",flexDirection:"column"}}>
       <HomeNavBar user={user} setUser={setUser}/>
       
        <div style={{display:"flex",position:"relative"}}>

            <ProNav user={user} setUser={setUser} />
            <div  className="profilediv"  style={{flex:"0.7",display:"grid",gridTemplateColumns:" auto auto auto",}} >
              {Imagee && feed.map((post,index) => {
                console.log(post)
                return <div key={post.id} style={{height:"200px",width:"200px",backgroundColor:"black",margin:"5px",display:"flex",alignItems:"center",textAlign:"center",justifyContent:"space-around"}}>
                  {post.contentType === "IMAGE" && <img style={{height:"180px",width:"180px",padding:"10px"}} src={post.imageURL} />}
                  {post.contentType === "TEXT"  && <p style={{overflow:"hidden",color:"white"}}>{post.text}</p>}
                </div>
              } )}
            {/* {Imagee && Imagee.map((im) => <img key={im.id} width={"200px"} height={"200px"}  src={im.url}></img>)} */}
            </div>
        </div> 
    </div>
  );
}


