import React from "react"
import Task from "./Task"
import PropTypes from "prop-types"

const TaskList = props =>{
    // children task czyli to co miedzy znaczniki przy wywolanie, react,.create
    console.log(props.children)
    const active = props.tasks.filter(task=>!task.isDone)
    const done = props.tasks.filter(task=>task.isDone)
    const activeTasks = active.map(task=><Task  key={task.id} task={task} delete={props.delete} done={props.done}/>)
    const doneTasks = done.map(task=><Task key={task.id}  task={task} delete={props.delete}/>)
    return(
        <>
            <h5>Do zrobienia: </h5>
            <ul className="list">
                {activeTasks}
            </ul>
            <h5>Zrobione</h5>
            <ul className="list">
                {doneTasks}
            </ul>
        </>
    )
}
TaskList.propTypes ={
    tasks: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired,
    done: PropTypes.func.isRequired,
}
export default TaskList