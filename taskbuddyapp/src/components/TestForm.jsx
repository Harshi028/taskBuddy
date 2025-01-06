import React, {useState} from "react";

export default function TaskForm(){
    const [task,setTask]=useState('');
    const [priority,setPriority]=useState('Medium');
    const [category,setCategory]=useState('General');
    return(
        <form className="task-form">
            <input type="text" 
            placeholder="Enter Your task" 
            required
            value={task}
            onChange={(e)=>setTask(e.target.value)} />

            <span><button>ADD Tasks</button></span>
            <div className="btns">
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>High</option>
                </select>

                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>General</option>
                    <option>Work</option>
                    <option>Personal</option>
                </select>
            </div>
        </form>
    )
}