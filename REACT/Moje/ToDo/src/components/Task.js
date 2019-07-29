import React from "react"
import PropTypes from "prop-types"
const Task = props =>{
    console.log(props)
    return(
        <li>
            {props.task.name}
            <button onClick={props.delete.bind(null, props.task.id)}>Usuń</button>
            {props.task.isDone || <button onClick={props.done.bind(null, props.task.id)}>Zrobione</button>}
         </li>
    )
}
Task.propTypes ={
    task: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired,
    done: PropTypes.func,
}
export default Task
