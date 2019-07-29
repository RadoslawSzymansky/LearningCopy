import React from "react"
const UsersList = props => {
    const { users } = props;
    const list = users.map(e => (
        <li key={e.login.uuid}>
            <p>Imie: {e.name.first} {e.name.last}</p>
            <h4>Phone: {e.cell}</h4>
        </li>
    ))
    return (
        <ul>
            {list}
        </ul>
    )
}
export default UsersList