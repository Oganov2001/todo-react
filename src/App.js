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
  const [ taskInput, setTaskInput ] = useState("");

  const deleteTask = (taskId) => {
    const newTaskList = [ ...taskList ];
    
    const taskTarget = newTaskList.filter(el => el.id === taskId)[0];
    const taskIndex = newTaskList.indexOf(taskTarget);
    newTaskList.splice(taskIndex, 1);
    
    setTaskList(newTaskList);
  };

  const createTask = (e, newTask) => {
    e.preventDefault();

    if (newTask) {
      const newTaskList = [ ...taskList ];

      // Convert the date to an alphanumeric string 
      // for the id in order to make it unique. 
      newTaskList.push({ id: Date.now().toString(36), task: newTask});

      setTaskList(newTaskList);
      setTaskInput("");
    } else {
      console.error("Please insert a non-empty string.");
    }
  };

  const editTask = (taskId, editedTask) => {
    const newTaskList = [ ...taskList ];
    
    newTaskList.filter(el => el.id === taskId)[0].task = editedTask;

    setTaskList(newTaskList);
  };

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div className="app">
      <Header></Header>
      <ToDoList list={taskList} deleteFunc={deleteTask} editFunc={editTask}></ToDoList>
      <ToDoCreate input={taskInput} inputFunc={handleInput} createFunc={createTask}></ToDoCreate>
    </div>
  );
}

export default App;
