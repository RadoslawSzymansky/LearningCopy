import React from 'react';
import Form from './Form';
import TaskList from './TaskList';
import './App.css';

class App extends React.Component{
  state={
    tasks: [{
      id: 0,
      name: "Zakupy",
      isDone: false
    },
    {
      id: 9,
      name: "Pranie",
      isDone: true
    },{
      id: 1,
      name: "Mycie",
      isDone: false
    },{
      id: 5,
      name: "Auto",
      isDone: true
    }]
  }
  addTask=(name)=>{
    const sortedList = [...this.state.tasks].sort((a,b) => a.id-b.id)
    const newId = sortedList[sortedList.length-1].id +1
    const tasks = this.state.tasks.slice()
    tasks.push({
      id: newId,
      name,
      isDone: false
    })
    this.setState({
      tasks
    })
  }
  deleteTask= (id)=>{
    const taskId = this.state.tasks.findIndex(task=>task.id === id)
    console.log(taskId)
    const tasks = [...this.state.tasks]
    tasks.splice(taskId, 1)
    this.setState({
      tasks
    })
  }
  makeTaskDone = (id)=>{
    const taskId = this.state.tasks.findIndex(task=>task.id === id)
    const tasks = [...this.state.tasks]
    tasks[taskId].isDone = true;
    this.setState({
      tasks
    })
  }
  render(){
    return (
      <div className="container">
        <h3>ToDo Lista</h3>
        <Form addTask={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.makeTaskDone}>Ja jestem dzieciiem, ale g moga byc elee,tmy</TaskList>
      </div>
    );
  } 
}

export default App;
