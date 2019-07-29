import React from 'react';
import Task from './Task'
const TaskList = props => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    done.sort((a, b) => {
        return b.finishDate > a.finishDate
    })
    console.log(active)
    active.sort((a, b) => {
        a = a.text.toLowerCase()
        b = b.text.toLowerCase()
        if (a.text > b.text) return 1
        if (a.text < b.text) return -1
        return 0
    })
    console.log(active)
    const activeTasks = active.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={() => props.delete(task.id)}
            change={() => props.change(task.id)}
        ></Task >
    ))
    const doneTasks = done.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        ></Task>
    ))




    return (
        <>
            <div className={"active"}>
                {activeTasks ? activeTasks : <p>Brak zadan</p>}
            </div>
            <div className={"done"}>
                <h2>Zrobione <em>{done.length}</em></h2>
                {done.length > 5 ? <span>Wyswietlamy tylko 5 zrobionych</span> : null}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    )
}


export default TaskList;