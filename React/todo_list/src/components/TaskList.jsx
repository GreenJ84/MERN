import React, {useState, useEffect} from 'react';

class Task{
    constructor( task ){
    this.task = task;
    this.completed = false;
    }
}

const  taskStyle ={
    display: 'block',
    listStyle: 'none'
}
const  completeTaskStyle ={
    display: 'block',
    listStyle: 'none',
    textDecorationLine: 'line-through'
}

const RenderTask = () => {
    const intialList = () => window.localStorage.getItem('taskList') || [];
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        window.localStorage.setItem('taskList', taskList);}, [taskList]
    );

    const createTask = (e) => {
        e.preventDefault();
        let thisTask = new Task(task);
        setTaskList([...taskList, thisTask]);
        setTask("");
    }
    const deleteTask = (e, idx) => {
        e.preventDefault();
        console.log(idx);
        console.log(taskList);
        taskList.splice(idx, 1);
        setTaskList([...taskList]);
    }
    const completeTask = (item) => {
        if (item.completed === true){
            item.completed = false;
        } else{ item.completed = true;}
        
        setTaskList([...taskList]);
    }

    return (<div>
        <h1>Create a Task</h1>
        <form onSubmit={(e) => createTask(e)}>
            <label></label>
            <input type='text' onChange={(e) => setTask(e.target.value)} placeholder='Task Name' value={task}/>
            <input type='submit' value='Add'/>
        </form>
        { taskList.filter(item => item.completed === false).map((item, idx) => <li key={idx} style={ taskStyle }>
            {item.task} 
            <input type='checkbox' checked={item.completed} onClick={(e) => completeTask(item)}/>
            <button onClick={(e) => deleteTask(e, idx)}>Delete</button>
        </li>)}
        { taskList.filter(item => item.completed === true).map((item, idx) => <li key={idx} style={ completeTaskStyle }>
            {item.task} 
            <input type='checkbox' checked={item.completed} onClick={(e) => completeTask(item)}/>
            <button onClick={(e) => deleteTask(e, idx)}>Delete</button>
        </li>)}
    </div>)
}
export default RenderTask;