import React, { Component } from 'react';
import Todos from './Todos';
class App extends Component {
  state = {
    Todos: [
      { id: 1, task: 'Change water tap.' },
      { id: 2, task: 'Buy groceries.' }
    ]
  }
  deleteTask=(id)=>{
    let tempTodos=this.state.Todos.filter(Todos=>{
      return Todos.id!==id
    });
    this.setState({
      Todos:tempTodos
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Todo Tasks</h1>
        <Todos deleteTask={this.deleteTask} todos={this.state.Todos}/>
      </div>
    );
  }
}

export default App;
