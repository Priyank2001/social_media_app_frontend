const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/Social_Media_App');
    const userSchema = new mongoose.Schema({
        id:Number,
        name: String,
        email: String,
        username:String,
        password: String,
    });
    const Kitten = mongoose.model('user', kittySchema);
    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'
}