class User {
    constructor(id,name,email,username,password,role = "",bio = "" , dp = ""){
        this.userID = id
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
    constructor(postID,userID,content_type,content,commentID_array = [],likeID_array = [],timestamp= new Date().getTime,likeCount = 0, commentCount = 0){
        this.postID = postID;
        this.userID = userID;
        this.content_type = content_type;
        this.timestamp = timestamp
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
var feed = [];
//comment =>  postId, timestamp , userID, text, commentID
var comment_array = [];
feed = []
var reactions_array = [];
reactions_array.push(new Reaction("akash", 1, "https://randomuser.me/api/portraits/men/62.jpg",true))
reactions_array.push(new Reaction("aman", 2, "https://randomuser.me/api/portraits/men/82.jpg",false))
reactions_array.push(new Reaction("pyiyank", 3, "https://randomuser.me/api/portraits/men/84.jpg",true))
reactions_array.push(new Reaction("rajesh", 4, "https://randomuser.me/api/portraits/men/74.jpg",false))
reactions_array.push(new Reaction("ritesh", 5, "https://randomuser.me/api/portraits/men/18.jpg",true))
reactions_array.push(new Reaction("tushar", 6, "https://randomuser.me/api/portraits/men/68.jpg",false))
reactions_array.push(new Reaction("rahul", 7, "https://randomuser.me/api/portraits/men/43.jpg",true))
reactions_array.push(new Reaction("ram", 8, "https://randomuser.me/api/portraits/men/61.jpg",false))
reactions_array.push(new Reaction("mojo", 9, "https://randomuser.me/api/portraits/men/71.jpg",true))
reactions_array.push(new Reaction("jojo", 10, "https://randomuser.me/api/portraits/men/73.jpg",false))

feed.push(new Post(1,3,"image",content = {text:"Rock and roll",imgSrc:"https://www.greensborocoliseum.com/assets/img/TR_GreensboroColiseum_1025_IronMaiden-WT_SG_1080x1080-04ae87c304.jpg"},[],[]))
feed.push(new Post(2,1,"image",content = {text:"Why don't you take what you watn from me",imgSrc:"https://m.media-amazon.com/images/I/41vQIQVaNAL._AC_SY450_.jpg"},[],[]))
feed.push(new Post(3,5,"image",content = {text:"Hell yeah",imgSrc:"https://wallpaperset.com/w/full/6/e/e/373467.jpg"},[],[]))
feed.push(new Post(4,2,"image",content = {text:"Samsung",imgSrc:"https://m.media-amazon.com/images/I/71HUnJvHsbL._SL1500_.jpg"},[],[]))
feed.push(new Post(5,6,"image",content = {text:"Kill us",imgSrc:"https://www.greensborocoliseum.com/assets/img/TR_GreensboroColiseum_1025_IronMaiden-WT_SG_1080x1080-04ae87c304.jpg"},[],[]))
feed.push(new Post(6,2,"text",content = {text:"I am on a highway to hell",imgSrc:"https://www.greensborocoliseum.com/assets/img/TR_GreensboroColiseum_1025_IronMaiden-WT_SG_1080x1080-04ae87c304.jpg"},[],[]))

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




users.addUser(new User("110","Priyank","priyank@gmail.com","priyank_2k","priyank123","","", "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_768%2Cx_285%2Cy_137/MTg3MDIwNjYxNzk1ODU3OTAz/image001.jpg"));
users.addUser(new User("111","Rajat","rajat@gmail.com","rajat_12","rajat123","","", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gKRbBKFm3WYzk9YKff8aS7rBGX_8Ul-bwg&usqp=CAU"));
users.addUser(new User("112","Akash","akash@gmail.com","akash_123","akash1234","","", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LITenWXIaM4BaTbEBXj-_Wfc4t_nPxTWaw&usqp=CAU"));
users.addUser(new User("113","Chandan","chandan@gmail.com","chandan_09","chandan90","","", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3yHaEWn0eiDAwLoco4urIsRcHQBC2lc2aA&usqp=CAU"));
users.addUser(new User("114","Tushar","tushar@gmail.com","tushar_12","tushar65432","","", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerGFi8mZgQbmnRcEh0OS-dFFn016kgfZaOw&usqp=CAU"));
users.addUser(new User("115","Ritesh","ritesh@gmail.com","ritesh_qw","ritesh123","","", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFK5YiAFYK6PcmI6w9nhKczNs_aSlaxLJ5Mg&usqp=CAU"));
users.addUser(new User("116","Rajendra","rajendra@gmail.com","rajendra_546","rajendra123234","","", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB0yFMIxr891ek--Gf2eWGk8VhSB_W87J9Q&usqp=CAU"));

// feed.addPost(new Post(postID = 101, userID=101,content_type="img", ))
//*************************************************************************************** */
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { isObjectIdOrHexString } = require("mongoose")
const app = express();

app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
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
    res.send(users.list[0]);
    return;
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
    const current_user_id = req.params.userID;
    var reacti = [[],["110","115","112","111"],[],[],[],[]];
    var ans = []
    reacti[postID].map((item,index) => {
        users.list.map((user,usr_idx) => {
            if(item === user.userID){
                ans.push({
                    username:user.username,
                    display_picture:user.display_picture,
                })
            }
        })
    })

    res.send(ans);
    


})

app.post('/post_comment',async (req,res) => {
    const postID = req.body.postID;
    comment_array.push(new Comment(req.body.postID,req.body.timestamp,req.body.userID,req.body.text,comment_array.length + 1))
    // console.log(comment_array[comment_array.length - 1])
    res.send({response_message:"Posted Successfully"})
})

app.post('/post',async (req,res) => {
    let temp = new Post(feed.length+1,req.body.userID,req.body.content_type,{text:req.body.content.text,imgSrc:req.body.content.imgSrc},[],[],req.body.timestamp)
    feed.push(temp)
    console.log(temp);
    res.send("you getting something")
})