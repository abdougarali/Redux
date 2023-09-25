import './App.css';
import AddToDo from './compo/AddToDo'
import TodoList from './compo/TodoList';
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>ADD NEW TASK : </h1>
      <AddToDo/>
      <TodoList/>
    </div>
  );
}

export default App;
