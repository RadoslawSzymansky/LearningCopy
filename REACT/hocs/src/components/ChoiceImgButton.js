import React from 'react'
const ChoiceImgButton = props => {
    const { src, name, active } = props.data
    return (
        <div
            onClick={() => { props.click(name) }}
            className="choiceWrapper"
            style={active ? { boxShadow: "0 0 2px 2px yellow" } : null}
        >
            <img src={src} alt={name} />
        </div>
    )
}
export default ChoiceImgButton