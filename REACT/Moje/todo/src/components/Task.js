import React from 'react';
const Task = props => {
    const { text, date, id, active, important, finishDate } = props.task;
    const style = {
        color: 'red'
    }
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> do- <span>{date} </span>
                    <button onClick={() => { props.change(id) }}>Zostalo zrobione</button>
                    <button onClick={props.delete.bind(id)}>X</button>
                </p>
            </div>
        )
    } else {
        const enddate = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong>
                        {text}
                    </strong>
                    <em>
                        (zrobic do-{date})<br></br>
                    </em>
                    Potwierdzenie wykonania: <span>{enddate} </span>

                    <button onClick={props.delete.bind(id)}>X</button>
                </p>
            </div>
        )
    }

}


export default Task;