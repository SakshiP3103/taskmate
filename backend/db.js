//npm i mongoose 
//making schemas

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/taskmate");
const taskmateschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',taskmateschema);
module.exports={
    todo
}