import { useState, useEffect } from 'react';
import { getTasks, addNewTask } from '../data/tasks';
import { Task } from './Task';
import { nanoid } from 'nanoid';

export const TaskList = () => {
    console.log('in render')
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        getTasks().then((data) => {
            setTasks(data);
        })
    }, []);

    


    const addTask = (event) => {
        event.preventDefault();
        const newTask = {
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
            id: nanoid(),
        }
        event.target.reset();
        // tasks.push(newTask);
        // כאשר המשתנה סטייט הוא אובייקט או מערך חובה ליצור מערך / אוביקט חדש בשביל שתופעל פונקצייה סטייט
        // const newTaskArr = [...tasks, newTask];
         // setTasks(newTaskArr);
         
        addNewTask(newTask).then(data => {
            setTasks(data);
        })
       
    }

    return (<>
        <h2> All Tasks </h2>
        <ul style={{listStyleType: 'none'}}>
            {/* הצורה להראות מערך של אוביקטים - דרך שימוש בפונקציה map */}
            {/* הפונקציה map מקבלת אלמנט מהמערך */}
            {/* ומחזירה את הקומפוננטה שצריך להציג */}
            {/* כאשר מציגים רשימה צריך להוסיף מאפיין key */}
            {/* לכל אלמנט במערך, שאמור לקבל ערך ייחודי לכל אלמנט במערך */}
            {/* אין!! לשים את האינדקס של המערך */}
            { tasks.map(t => <Task key={t.id} task={t} /> ) }
        </ul>


        <form onSubmit={addTask}>
            <input type="text" name="title" placeholder='title'/> <br/>
            <input type="text" name='description' placeholder='description' /> <br />
            <select name='status'>
                <option>todo</option>
                <option>in progress</option>
                <option>done</option>
            </select> 
            <br />
            <button> add new task </button>
        </form>
    </>);
}