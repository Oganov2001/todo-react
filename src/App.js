import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoCreate from './components/ToDoCreate';

function App() {
  const [ taskList, setTaskList ] = useState([
    {
      id: 0,
      task: "Feed my dog"
    },
    {
      id: 1,
      task: "Pay my taxes"
    },
    {
      id: 2,
      task: "Go to sleep"
    }
  ]);

  return (
    <div className="app">
      <Header></Header>
      <ToDoList list={taskList}></ToDoList>
      <ToDoCreate></ToDoCreate>
    </div>
  );
}

export default App;
