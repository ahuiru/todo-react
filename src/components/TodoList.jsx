import React from 'react'

export const TodoList = ({ todoList, setTodoList }) => {

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))

  }

  const handleCompleted = (id) => {
    setTodoList(todoList.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    }))
  }

  return (
    <div className='todoList'>
      <div className="todos">
        {todoList.map((todo) => (
          <div className={`todo ${todo.completed ? "completed" : ""}`} key={todo.id}>
            <div className="todoText">
              <span>{todo.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleCompleted(todo.id)}>
                <i className="fa-solid fa-check"></i>
              </button>
              <button onClick={() => handleDelete(todo.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
