import React from 'react';
const FetchButton = props => {
    const style = {
        backgroundColor: 'grey',
        color: 'white',
        border: '2px solid green',
        padding: "10px",
        margin: 20
    }
    return (
        <button onClick={props.click} style={style}>Dodaj użytkownika</button>
    )
}
export default FetchButton