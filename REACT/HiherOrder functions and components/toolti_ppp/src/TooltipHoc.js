import React from 'react';

export default function withHover (Component, Tooltip,  hovering = false) {
  return class withHover extends React.Component {
    state = { 
      hovering: false,
      posX: 0,
      posY: 0
     };
    mouseOver = () => this.setState({ hovering: true });
    mouseOut = () => this.setState({ hovering: false });
    render(){
      console.log(this.props)
      const props = {
        ...this.state,
        size: this.props.size
      }
      return(
        <div 
          onMouseEnter={this.mouseOver} 
          onMouseLeave={this.mouseOut}
          onMouseMove={e => this.setState({posX: e.clientX, posY: e.clientY})}
          style={{backgroundColor: '#000'}}
        >
          <Component/>
          {this.state.hovering ? <Tooltip {...props} /> : null}
        </div>
      )
    }
  }
}