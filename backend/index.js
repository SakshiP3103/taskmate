//basic express boilerplae code
//express.json() middleware

const express=require("express");
const {createTodo,updateTodo}=require("./types");
const app=express();
app.use(express.json());
app.post("/todo",function(req,res){
  const createPayLoad=req.body;
  const parsedPayLoad=createTodo.safeParse(createPayLoad);
   if(!parsedPayLoad.sucess){
    res.status(411).json({
        msg:"you sent the wrong inputs",
    })
    return;
}
})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const updatePayLoad=req.body;
    const parsedPayLoad=updateTodo.safeParse(updatePayLoad);
     if(!parsedPayLoad.sucess){
      res.status(411).json({
          msg:"you sent the wrong inputs",
      })
      return;
  }
})
