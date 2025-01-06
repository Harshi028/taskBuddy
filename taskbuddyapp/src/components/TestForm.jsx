import React, {useState} from "react";

export default function TaskForm(){
    const [task,setTask]=useState('');
    return(
        <form>
            <input type="text" 
            placeholder="Enter Your task" 
            required
            value={task}
            onChange={(e)=>setTask(e.target.value)} />

            <h1>{task}</h1>
        </form>
    )
}