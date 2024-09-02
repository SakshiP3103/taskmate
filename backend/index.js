//basic express boilerplae code
//express.json() middleware

const express=require("express");
const {createTodo,updateTodo}=require("./types");
const { todo } = require("./db");
const app=express();
app.use(express.json());
app.post("/todo",async function(req,res){
  const createPayLoad=req.body;
  const parsedPayLoad=createTodo.safeParse(createPayLoad);
   if(!parsedPayLoad.sucess){
    res.status(411).json({
        msg:"you sent the wrong inputs",
    })
    return;
}

//putting in mongodb
await todo.create({
    title:createPayLoad.title,
    description:createPayLoad.description,
    completed:false
})

res.json({
    msg:"todo created"
})

})

app.get("/todos", async function(req, res) {
    const todos = await todo.find();
    console.log(todos) // promise
    res.json({
        todos
    })
    })

app.put("/completed",async function(req,res){
    const updatePayLoad=req.body;
    const parsedPayLoad=updateTodo.safeParse(updatePayLoad);
     if(!parsedPayLoad.sucess){
      res.status(411).json({
          msg:"you sent the wrong inputs",
      })
      return;
  }

  await todo.update({
    _id:req.body.id
  },{
    completed:true
  })
  res.json({
    msg:"todos marked as completed"
})
})
