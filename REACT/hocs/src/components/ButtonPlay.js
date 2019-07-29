import React from 'react'
import enhance from "./enhance"
const ButtonPlay = (props) => {
    const span = !props.active ? <span className="tooltipInfo">Choose weapon</span> : null
    return (
        <div className="tooltip">
            <button className="btnPlay" onClick={props.active && props.click}>Play round!</button>
            {span}
        </div>
    )
}
export default enhance(ButtonPlay)
