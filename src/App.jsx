import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Add todo:
          <input name="todo" type="text" />
        </label>
        <button>Add</button>
      </form>
      <ul>
        {todos.map(
          (
            { text, isDone, id } //cuando se le va dar un objeto como argumento a map se usa ({})
          ) => (
            <li onClick={() => toggleIsDone(id)} key={id}>
              {text}
              {isDone && '✌🏼'}
            </li>
          )
        )}
      </ul>
    </div>
  )

  function toggleIsDone(id) {
    const index = todos.findIndex(todo => todo.id === id)
    const todo = todos[index]

    setTodos([
      ...todos.slice(0, index),
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(index + 1),
    ])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.todo
    const newTodo = { text: input.value, isDone: false, id: uuidv4() } // cuando se envia el form
    setTodos([...todos, newTodo]) //spread operator ...todos-Array - -se pueden escribir en otro orden
    form.reset()
    input.focus()
  }
}
