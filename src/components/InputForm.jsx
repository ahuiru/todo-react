import React, { useState } from 'react'
import { ulid } from 'ulid';

export const InputForm = ({ todoList, setTodoList}) => {
const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    setTodoList([
      ...todoList,
      {
        id: ulid(),
        text: inputText,
        completed: false
      }
    ])
    setInputText('');
  }

  const handleChange = (e) => {
    setInputText(e.target.value)

  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='todo' onChange={handleChange} value={inputText} />
        <button>
          <span>+</span>
        </button>
        </form>
    </div>
  )
}
