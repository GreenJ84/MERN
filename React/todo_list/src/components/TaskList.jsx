import React, {useState} from 'react';
import Task from './task';







const RenderTask = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const createTask = (e) => {
        e.preventDefault();
        console.log('Hello')
        let thisTask = new Task(task);
        taskList.push(thisTask);
        setTaskList(taskList);
    }
    const deleteTask = (idx) => {
    taskList.slice(idx, 1);
    }

    return (<div>
        <h1>Create a Task</h1>
        <form onSubmit={(e) => createTask(e)}>
            <label></label>
            <input type='text' onChange={(e) => setTask(e.target.value)} placeholder='Task Name'/>
            <input type='submit' value='Add'/>
        </form>
        { taskList.filter(item => item.complete = false).map((item, idx) => <li key={idx}>
            {item.task} 
            <input type='checkbox' checked={item.completed}/>
            <button onClick={(e) => e.deleteTask(idx)}>Delete</button>
        </li>)}
    </div>)
}
export default RenderTask;