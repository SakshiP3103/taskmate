//for all the zod validations
//npm i zod

const zod=require("zod");
//writing the zod schema
const createtodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updatetodo=zod.object({
    id:zod.string(),
   
})
//to export these
module.exports={
    createtodo:createtodo,
    updatetodo:updatetodo
}

