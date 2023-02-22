import './App.css';
import TodoList from './components/TodoList';
import { Name } from './components/Name';
import { Instruction } from './components/Instruction';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <Instruction />
      <Name />
    </div>
  );
}

export default App;
