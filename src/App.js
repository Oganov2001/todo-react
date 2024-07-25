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

  const deleteTask = (taskId) => {
    const newTaskList = [ ...taskList];
    
    const taskTarget = newTaskList.filter(el => el.id === taskId)[0];
    const taskIndex = newTaskList.indexOf(taskTarget);
    newTaskList.splice(taskIndex, 1);
    
    setTaskList(newTaskList);
  };

  return (
    <div className="app">
      <Header></Header>
      <ToDoList list={taskList} deleteFunc={deleteTask}></ToDoList>
      <ToDoCreate></ToDoCreate>
    </div>
  );
}

export default App;
