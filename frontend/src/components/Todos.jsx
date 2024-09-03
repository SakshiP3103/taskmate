
//here instead of using props we used todos i.e. 
//object destructing
//here todo is an array like
/*
todos=[{
   title:"go to gym",
   decription:do cardio
}]

*/
export function Todos({todos}){

    return <div>
        /* <h1>go to gym</h1>
        <h1>do cardio</h1>
        <button>mark as complete</button> */
        {
         todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.descriptions}</h1>
                <button>{todo.completed==true?"Completed":"Complete"}</button>
            </div>
         })
        }
        
    </div>
}