class User {
    constructor(id,name,email,username,password,role = "",bio = "" , dp = ""){
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
        this.bio = bio
        this.display_picture = dp
        this.role = role
    }
}

class UserList {
    constructor(){
        this.list = []
        this.addUser = (temp) => {
            this.list.push(temp)
        }
        this.listLength = () => {
            return this.list.length
        }
    }

}

class Post{
    constructor(postID,userID,content_type,content,commentID_array = [],likeID_array = [],timestamp="",likeCount = 0, commentCount = 0){
        this.postID = postID;
        this.userID = userID;
        this.content_type = content_type;
        this.date = new Date(Date.now());
        this.content = content
        this.likeCount = likeCount;
        this.commentCount = commentCount;
   
    }
}

class Feed{
    constructor(){
        this.list = []
        this.addPost = (new_post) =>{
            this.list.push(new_post);
        }
    }
    
}

class Comment {
    constructor(postID,timestamp = "",userID="",text="",commentID=""){
        this.postID = postID;
        this.timestamp = timestamp
        this.authorID = userID
        this.text = text
        this.commentID = commentID
    }
}


class Reaction{
    constructor(username,userID,userDP,isLikedByCurrentUser = false){
        this.username = username;
        this.userID = userID;
        this.userDP = userDP;
        this.isLikedByCurrentUser = isLikedByCurrentUser;
    }
}
const users = new UserList()
var feed = [
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "https://rukminim1.flixcart.com/image/416/416/poster/t/v/6/the-green-day-wall-art-framed-poster-aip111-medium-original-imaejpyf6gwebj4q.jpeg?q=70",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      photo: "https://rukminim1.flixcart.com/image/312/312/kpvivm80/poster/9/z/w/medium-chris-martin-coldplay-poster-pp2228-original-imag4ypjqhpgwseb.jpeg?q=70",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      desc: "Every moment is a fresh beginning.",
      photo: "https://rukminim1.flixcart.com/image/416/416/kpvivm80/poster/t/t/v/medium-chris-martin-illustration-coldplay-poster-pp2343-original-imag4yph84gm9z7a.jpeg?q=70",
      date: "1 hour ago",
      userId: 3,
      like: 61,
      comment: 2,
    },
    {
      id: 4,
      photo: "assets/post/4.jpeg",
      date: "4 hours ago",
      userId: 4,
      like: 7,
      comment: 3,
    },
    {
      id: 5,
      photo: "assets/post/5.jpeg",
      date: "5 hours ago",
      userId: 5,
      like: 23,
      comment: 5,
    },
    {
      id: 6,
      photo: "assets/post/6.jpeg",
      date: "1 day ago",
      userId: 6,
      like: 44,
      comment: 6,
    },
    {
      id: 7,
      desc: "Never regret anything that made you smile.",
      photo: "assets/post/7.jpeg",
      date: "2 days ago",
      userId: 7,
      like: 52,
      comment: 3,
    },
    {
      id: 8,
      photo: "assets/post/8.jpeg",
      date: "3 days ago",
      userId: 8,
      like: 15,
      comment: 1,
    },
    {
      id: 9,
      desc: "Change the world by being yourself.",
      photo: "assets/post/9.jpeg",
      date: "5 days ago",
      userId: 9,
      like: 11,
      comment: 2,
    },
    {
      id: 10,
      photo: "assets/post/10.jpeg",
      date: "1 week ago",
      userId: 10,
      like: 104,
      comment: 12,
    },
  ];
//comment =>  postId, timestamp , userID, text, commentID
var comment_array = [];
feed = []
var reactions_array = [];
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
// reactions_array.push(new Reaction())
feed.push(new Post(1,3,"image",content = {text:"Rock and roll",imgSrc:"https://www.greensborocoliseum.com/assets/img/TR_GreensboroColiseum_1025_IronMaiden-WT_SG_1080x1080-04ae87c304.jpg"},[],[]))
feed.push(new Post(2,1,"image",content = {text:"Why don't you take what you watn from me",imgSrc:"https://m.media-amazon.com/images/I/41vQIQVaNAL._AC_SY450_.jpg"},[],[]))
feed.push(new Post(3,5,"image",content = {text:"Hell yeah",imgSrc:"https://wallpaperset.com/w/full/6/e/e/373467.jpg"},[],[]))
feed.push(new Post(4,2,"image",content = {text:"Samsung",imgSrc:"https://m.media-amazon.com/images/I/71HUnJvHsbL._SL1500_.jpg"},[],[]))
feed.push(new Post(5,6,"image",content = {text:"Kill us",imgSrc:"https://www.greensborocoliseum.com/assets/img/TR_GreensboroColiseum_1025_IronMaiden-WT_SG_1080x1080-04ae87c304.jpg"},[],[]))
comment_array.push(new Comment(1,"",2 ,"Nice pic boi", 1 ))
comment_array.push(new Comment(2,"",1 ,"wel done",2))
comment_array.push(new Comment(3,"",4 ,"killer bot i am" ,3))
comment_array.push(new Comment(3,"",6 ,"lets rock",4))
comment_array.push(new Comment(2,"",3 ,"I m in ruins",5))
comment_array.push(new Comment(1,"",5 ,"Save your tears",6))
comment_array.push(new Comment(5,"",9 ,"Why you hurt me",7))
comment_array.push(new Comment(4,"",10,"Hate me",8))
comment_array.push(new Comment(2,"",10,"Try again",9))
comment_array.push(new Comment(1,"",7,"skrillex",10))
// console.log(feed[0]);



users.addUser(new User(110,"Priyank","priyank@gmail.com","priyank_2k","priyank123","","", "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_768%2Cx_285%2Cy_137/MTg3MDIwNjYxNzk1ODU3OTAz/image001.jpg"));
// feed.addPost(new Post(postID = 101, userID=101,content_type="img", ))
//*************************************************************************************** */

const express = require("express");
const cors = require("cors");
const { isObjectIdOrHexString } = require("mongoose")
const app = express();

app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8000;


app.get('/',(req, res) => {
    res.send("Hello bois")
}).
listen(port,() => {
console.log(`Started on PORT ${port}`);
})

app.post('/signin',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    for (let itr in users.list){
        let i = users.list[itr];
        if( i.username === username && i.password === password){
            res.json({
                username:i.username,
                name:i.name,
                userId:i.userId,
                display_picture:i.display_picture,
                session_key:""
            });
            res.status(200);
            return ;
        }
    }
    res.json(null);
    res.status(400);
})

app.get('/feed', (req,res) => {

    res.send(feed);
})
app.post('/users/register',(req,res) => {
    // console.log(req.body);
    res.send("I am post method")
})

app.get('/:postID/get_comment',(req,res) => {
    var arr = []
    const postID = req.params.postID;
    // console.log(postID)
    for(let i in comment_array){
        if(comment_array[i].postID == postID){
            arr.push(comment_array[i]);
        }
    }
    res.send({
        comment_arr:arr,
        http_status:200,
    });
})

app.get('/:postID/:userID/reactors' , (req,res) => {
    // [userID,username,userDP]
    const postID = req.params.postID;
    const current_user_id = userID;

})

app.post('/post_comment',async (req,res) => {
    const postID = req.body.postID;
    comment_array.push(new Comment(req.body.postID,req.body.timestamp,req.body.userID,req.body.text,comment_array.length + 1))
    // console.log(comment_array[comment_array.length - 1])
    res.send({response_message:"Posted Successfully"})
})