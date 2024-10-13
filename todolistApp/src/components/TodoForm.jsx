import React,{useState,useRef,useEffect} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState('');

    //for focusing input box
     const inputRef=useRef(null);

     useEffect(()=>{
       inputRef.current.focus();
     })
     
    const handleChange =(e)=>{
        let newInput=e.target.value;
        setInput(newInput)
    }


    const handleSubmission=(e)=>{
        e.preventDefault();

        props.onSubmit({
          id:Math.floor(Math.random()*1000),
          text:input
        })
        setInput('');
    }
  return (
  
        <form onSubmit={handleSubmission} className='todo-form'>
          {props.edit?(<>
            <input type="text"
       value={input}
        placeholder="Add task"
         name="task"
          className='todo-input edit'
          ref={inputRef}
           onChange={handleChange} />
      <button  className='todo-button edit'>Update</button>
          </>):(<><input type="text"
       value={input}
        placeholder="Add task"
         name="task"
          className='todo-input'
          ref={inputRef}
           onChange={handleChange} />
      <button  className='todo-button'>Add Task</button></>)}
      
      </form>
  
  )
}

export default TodoForm
