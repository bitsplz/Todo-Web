import React, { Component } from 'react';
import AddTask from './AddTask';
import Todos from './Todos';
class App extends Component {
  state = {
    Todos: [
      { id: 1, task: 'Change water tap.' },
      { id: 2, task: 'Buy groceries.' }
    ]
  }
  deleteTask = (id) => {
    let tempTodos = this.state.Todos.filter(Todos => { //creating a copy after filtering the id id that matches clicked id
      return Todos.id !== id
    });
    this.setState({
      Todos: tempTodos
    });
  }
  addTask = (task) => {
    task.id = Math.random() * 10;
    let tempTask = [...this.state.Todos, task]//creating a copy of existing list and new task inputted
    this.setState({
      Todos: tempTask
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo Tasks</h1>
        <ul className="center">
          <li>Click Task to Delete</li>
          <li>Input Task to Add to Todo</li>
        </ul>
        <Todos deleteTask={this.deleteTask} todos={this.state.Todos} />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
