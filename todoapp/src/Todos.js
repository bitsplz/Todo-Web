import React from 'react';

const Todos = (props) => {
    const {todos, deleteTask}=props;
    const todoList = todos.length?(todos.map(todo => {
        return (
            <div key={todo.id}>
                <span onClick={()=>deleteTask(todo.id)}>{todo.task}</span>
            </div>
        )
    })
    ):(
        <p>you have no tasks left</p>
    )
    return (
        <div >
            {todoList}
        </div>
    )
}
export default Todos;