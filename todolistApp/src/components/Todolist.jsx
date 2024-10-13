import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function Todolist() {
  const [todos,setTodos]=useState([]);
  const addTodo =todo=>{
    if(!todo.text||/^s*$/.test(todo.text)){
      return;
    }
    const newTodos=[todo,...todos];
    setTodos(newTodos);
    console.log(...todos)
  }
//update function when editing the task
  const updateTodo=(todoId,newValue)=>{
    if(!newValue.text || /^s*$/.test(newValue.text)){
      return;
    }
    setTodos(prev=>prev.map(item=>(item.id=== todoId? newValue :item)))
  }

  //remove function for  remove the task by filtering the selectedc id
const removeTodo=id=>{
 const removedArray= todos.filter(todo=>todo.id!=id)
 setTodos(removedArray);
}

//To mark the task complete or not
  const completeTodo=(id)=>{
    let updateTodos= todos.map(todo=>{
     if( todo.id==id){
     todo.isComplete=!todo.isComplete;
    }
    return todo;
  });
  setTodos(updateTodos);
};
  return (
    <div className='todo-app'>
      <h1>What's the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
     <Todo todos={todos}
      completeTodo={completeTodo}
       removeTodo={removeTodo}
       updateTodo={updateTodo} />
    </div>
  )
}

export default Todolist
