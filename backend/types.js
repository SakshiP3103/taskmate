//for all the zod validations
//npm i zod

const zod=require("zod");
//writing the zod schema
const createTodo=zod.object({
    title:zod.string().min(1),
    description:zod.string().min(1)
})

const updateTodo=zod.object({
    id:zod.string(),
   
})
//to export these
module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}

