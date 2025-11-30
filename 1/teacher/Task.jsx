export const Task = (props) => {
    // const task = props.task;
    const { task } = props;
    const tasksColors = {
        todo: 'red',
        'in progress': '#cbcb39',
        done: 'green',
    }

    return <li style={{color: tasksColors[task.status]}}><div className="task">
        <h3> { task.title } </h3>
        <p> { task.description } </p>
    </div></li>

}