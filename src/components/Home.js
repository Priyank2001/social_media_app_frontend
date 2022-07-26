import HomeNavBar from "./HomeNavBar"
import Post from "./postComponents/Post"
import Divider from '@mui/material/Divider';
import './styles/Home.css'
export default function Home(props){
    return (
        <div className="__homepage">
            
            <HomeNavBar setUser={props.setUser} user={props.user}/>
            <Divider />
            <div className="__all_posts" >
            <Post display_picture="https://cms.kerrang.com/images/2021/12/twenty-one-pilots-The-Outside-live-in-Mexico.jpg" 
                username="twentyone_pilots"
                key="101"
                type="image"
                caption="Had a great time with you guys! Wanna play for you soon.....<3"
                postSrc="https://i.pinimg.com/originals/8c/53/b8/8c53b838c2c00b8e5e19972c5010a325.jpg"
                postID="101"
            />
            <Post 
            display_picture="https://www.billboard.com/wp-content/uploads/media/skrillex-2018-cr-Jas-Davis-billboard-1548.jpg"
            key="102"
            type="image"
            caption="Feel the vibe"
            postSrc="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/royalty-free-4k-modern-album-cover-video-design-template-eb2423a835142dc004820e3592755083_screen.jpg?ts=1633846432"
            username="skrillex"
            postID="102"
            />
            <Post 
            display_picture="https://pbs.twimg.com/media/A3Rcfe8CIAAFfIp.jpg"
            type="text"
            key="103"
            text="Music is the essence of life. Everything that has rhythm has music. Our breathing also has a rhythm. Thus, we can say that there is music in every human being or a living creature. Music has the ability to convey all sorts of emotions to people."
            username="__slash__"
            postID="103"
            />
            </div>
        </div>
    )
}