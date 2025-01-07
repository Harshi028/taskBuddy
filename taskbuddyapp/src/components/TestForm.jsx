import React, {useState} from "react";

export default function TaskForm(addTask){
    const [task,setTask]=useState('');
    const [priority,setPriority]=useState('Medium');
    const [category,setCategory]=useState('General');

    const handlesubmit=(e)=>{
        addTask({text: task,priority,category,completed:false})//send data to addTask()(data added to local storage)
        //add reset
        setPriority("Medium");
        setCategory("General");
        setTask("");
    }
    return(
        <form onSubmit={handlesubmit} className="task-form">
            <div id="inp">
                <input type="text" 
                placeholder="Enter Your task" 
                required
                value={task}
                onChange={(e)=>setTask(e.target.value)} />
                <span><button id="inii">ADD Tasks</button></span>
            </div>

            <div id="btns">
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">Medium</option>
                    <option value="Medium">Low</option>
                    <option value="Low">High</option>
                </select>

                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}