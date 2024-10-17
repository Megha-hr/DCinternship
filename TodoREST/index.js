const express = require('express');
const app =express();
const PORT= process.env.PORT||3000;

//Middleware to parse JSON bodies
app.use(express.json());

//Declaring a array to store to-do items
let todos=[];
let currentId=1;

//route for get all to-do items

app.get('/todos',(req,res)=>{
res.json(todos);
});

//route for get single to-do item

app.get('/todos:id',(req,res)=>{
    const id=parseInt(req.param.id);
  const todo= todos.find(item=>item.id===id)
    if(todo){
        res.json(todo)   
    }else{
        res.status(404).json({message:'to-do item not found'})
    }

  
});

//add to-do item to todos(POST)

app.post("/todos",(req,res)=>{
    const {title,completed}=req.body;

    if(!title){
        return res.status(400).json({message:'title is required'})
    }
    const newTodo={
        id:currentId++,
        title:title,
        completed:completed||false,

    };

    todos.push(newTodo);
    res.status(201).json(newTodo)
})

//route for updateing existing to-do item

app.put('/todos/:id',(req,res)=>{
    const id=parseInt(req.param.id);
    const {title,completed}=req.body;
    const todo =todos.find(item=>item.id===id);

    if(todo){
        todo.title=title!==undefined?title:todo.title;
        todo.completed = completed !== undefined ? completed : todo.completed;
        res.json(todo);
    }else{
        res.status(404).json({message:'to-do item not found'})
    }
});

//delete route

app.delete('/todos/:id',(req,res)=>{
const id=parseInt(req.params.id);

const deletedTodo =todos.filter(todo=>todo.id!=id)

if(deletedTodo){
    res.json(deletedTodo)
}else{
    res.status(404).json({ message: 'To-do item not found' });
}

});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});