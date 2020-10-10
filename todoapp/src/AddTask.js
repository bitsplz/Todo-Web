import React, { Component } from 'react'

export default class AddTask extends Component {
    state = {
        task: ''
    }
    handleChange = (e) => {//update state to input value
        this.setState({
            task: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();//prevent refersh of page after form submit
        //console.log(this.state);
        this.props.addTask(this.state);//call the function in App.js
        this.setState({//set input box to empty after input submitted
            task: ''
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Add new Task:</label>
                    <input type="text" id="task" onChange={this.handleChange} value={this.state.task} />
                </form>
            </div>
        )
    }
}
