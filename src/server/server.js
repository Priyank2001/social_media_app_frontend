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
    constructor(postID,userID,content_type,content,commentID_array = [],likeID_array = []){
        this.postID = postID;
        this.userID = userID;
        this.content_type = content_type;
        this.date = new Date(Date.now());
        if(this.content_type === 'text'){
            this.content = {
                text: content.text
            };
        }
        else{
            this.content = {
                imgSrc :content.src,
                caption: content.caption
            }
        }
        this.commentID_array = commentID_array;
        this.likeID_array = likeID_array;

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



const users = new UserList()
const feed = [
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "assets/post/1.jpeg",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      photo: "assets/post/2.jpeg",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      desc: "Every moment is a fresh beginning.",
      photo: "assets/post/3.jpeg",
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
users.addUser(new User(110,"Priyank","priyank@gmail.com","priyank_2k","priyank123","","", "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_768%2Cx_285%2Cy_137/MTg3MDIwNjYxNzk1ODU3OTAz/image001.jpg"));
// feed.addPost(new Post(postID = 101, userID=101,content_type="img", ))
//*************************************************************************************** */
const express = require("express");
const cors = require("cors");
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

app.get('/signin',(req,res) => {
    let username = req.query.username;
    let password = req.query.password;
    for (let itr in users.list){
        let i = users.list[itr];
        if( i.username === username && i.password === password){
            
            res.send({
                username:i.username,
                name:i.name,
                userId:i.userId,
                display_picture:i.display_picture
            });
            res.status(200);
            return ;
        }
    }
    res.send(null);
    res.status(400);
})

app.get('/feed', (req,res) => {
    res.send(feed);
})
app.post('/users/register',(req,res) => {
    console.log(req.body);
    res.send("I am post method")
})