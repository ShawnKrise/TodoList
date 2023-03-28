import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine} from 'react-icons/ri';
import { TiEdit} from 'react-icons/ti';

//Create Todo Function with ability to complete, remove, and update todo
function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  //create const for updating value of todo
  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
        id: null,
        value: ''
    })
  }
//if we edit the id, return TodoForm edit, and then onsubmit submit update
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

//return todos.map to loop through each todo in the todos array
  return todos.map((todo, index) => (
    //set div for todo.isComplete. If complete todo-row complete, if not keep as todo-row
    <div className={todo.isComplete ? 'todo-row complete' :'todo-row'} 
    //key is assigned to index. Used by react to keep track of elements
    key={index}
    >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}   
        </div>
        {/* div to display delete icons */}
        <div className='icons'>
            <RiCloseCircleLine 
            onClick ={() => removeTodo(todo.id)}
            className='delete-icon'
            />
        {/* display edit icons */}
            <TiEdit 
            onClick ={() => setEdit({ id: todo.id, value: todo.text})}
            className='edit-icon'
            />
        </div>

    </div>
  ));
}

export default Todo