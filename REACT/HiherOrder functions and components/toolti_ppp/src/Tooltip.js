import React from 'react';

class Tooltip extends React.Component {
  render() {
    console.log('tooltip' , this.props)
    return (
      <div className="tooltip"
        style={{
          backgroundColor: '#faf',
          width: this.props.size,
          height: this.props.size,
          position: "absolute",
          top: this.props.posY,
          left: this.props.posX
        }}>
        Hello world
    </div>
    )
  }
};
export default Tooltip;