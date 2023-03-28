import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


//JS file for TodoList
function TodoList() {
    const [todos, setTodos] = useState([]);

    //create const for Adding Todos 
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
        return  
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    //create a const for updating Todos
    //if new value text return
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return  
            }
    //set Todos to previous map item. item id is equal to todoId THEN newValue else use item
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };



    //create a const for removing todos from array
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    //create a const for completing todos from array
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

  return (
    //set Title, add TodoForm 
    //add Todo with properties equal to consts
    <div>
        <h1>Create a Daily Todo List:</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList