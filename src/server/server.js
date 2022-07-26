class user {
    constructor(id,name,email,username,password){
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
    }
}

class userList {
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
const users = new userList()
users.addUser(new user(101,"Priyank","priyank@gmail.com","priyank_2k","priyank123"));

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

app.get('/users',(req,res) => {
    res.send(users.list);
})

app.post('/users/register',(req,res) => {
    console.log(req.body);
    res.send("I am post method")
})