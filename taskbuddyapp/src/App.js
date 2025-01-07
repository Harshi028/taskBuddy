import { useEffect, useState } from "react";
import TaskForm from "./components/TestForm";
import './Style.css';
import TaskList from "./components/TestList";
import ProgressTracker from "./components/ProgressTracker";
function App() {
  // useEffect(()=>{
  //   alert('Hello')
  // },[name])

  const[tasks,setTasks]=useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  const addTask = (task)=>{
    setTasks([...tasks,task]) //spread operator will create new object
  };

  const updateTask = (index, updateTask) => {
    const newTasks = [...tasks];//... will create copy of tasks
    newTasks[index] = updateTask;
    setTasks(newTasks);
  };

  const deleteTask = (index)=>{
    setTasks(tasks.filter((_,i) => i !== index));
  };

  const clearTasks=()=>{
    setTasks([]);
  };
  return (
    <div className="App">
      <header class="header">
        <div>
          <h1 class="header-container">
            Task<span class="highlight">Buddy</span>
          </h1>
        </div>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList
      tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}
      />

      <ProgressTracker tasks={tasks}/>
      {tasks.length>0 && (
      <button className="clear-btn" onClick={clearTasks}>
        Clear all Tasks</button>
      )}   
    </div>
  );
}

export default App;