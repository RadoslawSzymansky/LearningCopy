import React from 'react';
import './App.css';
import Tooltip from './Tooltip';
import tooltipHoc from './TooltipHoc'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    isHovered: false,
    posX: 0,
    posY: 0
  }
  render() {
    return(
      <div className="wrapper" style={{height:300, backgroundColor: '#ddd'}}>
        <p>Ok to ja app</p>
      </div>
    )
  }
}
const AppWithTooltip = tooltipHoc(App, Tooltip)

ReactDOM.render(<AppWithTooltip size="50px"/>, document.getElementById('root'));
