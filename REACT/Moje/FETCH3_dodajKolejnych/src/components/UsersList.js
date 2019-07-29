import React from "react";
import './Users.css'
const UsersList = props => {
    const { users } = props;
    const list = users.map(e => (
        <li key={e.login.uuid}>
            <img src={e.picture.large} alt={e.name.last}></img>
            <p>Imie: {e.name.first} {e.name.last}</p>
            <h4>Phone: {e.cell}</h4>
        </li>
    ))
    return (
        <ul className="users">
            {list}
        </ul>
    )
}
export default UsersList