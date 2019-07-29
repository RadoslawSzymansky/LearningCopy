import React from 'react';
import './App.css';
import TaskList from './TaskList'
import AddTask from './AddTask'
class App extends React.Component {
  counter = 3;
  state = {
    tasks: [
      {
        text: "zagrac w wiedzmina",
        date: '2018-02-15',
        id: 0,
        important: false,
        active: true,
        finishDate: null
      },
      {
        text: "kakupy",
        date: '2018-01-18',
        id: 1,
        important: true,
        active: true,
        finishDate: null
      }, {
        text: "amyc",
        date: '2018-04-16',
        id: 2,
        important: true,
        active: true,
        finishDate: '2019-04-16'
      }
    ]
  }
  deleteTask = (id) => {
    console.log('delete ' + id)
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(elem => {
      return elem.id === id
    })
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log('stauus chane' + id)
    let tasks = [...this.state.tasks].map(e => {
      if (e.id === id) {
        e.active = false
        e.finishDate = new Date().getTime()
      }
      return e
    }
    )
    this.setState({
      tasks
    })
  }
  addTask = (text, important, date) => {
    const task = {
      text,
      date,
      id: this.state.tasks.length,
      important,
      active: true,
      finishDate: null
    }

    this.counter++;
    console.log(task, this.counter)
    this.setState((prev) => ({
      tasks: [...prev.tasks, task]
    }))
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask addTask={this.addTask}></AddTask>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        >
        </TaskList>
      </div>
    );
  }
}

export default App;
