import React from 'react';

const Todos = (props) => {
    const { todos, deleteTask } = props;
    const todoList = todos.length ? (todos.map(todo => {
        return (//if tasks are available display them
            <div onClick={() => deleteTask(todo.id)} className="collection-item" key={todo.id}>
                <span >{todo.task}</span>
            </div>
        )
    })
    ) : (//if no task left show message
            <p className="center">you have no tasks left</p>
        )
    return (
        <div className="collection" >
            {todoList}
        </div>
    )
}
export default Todos;