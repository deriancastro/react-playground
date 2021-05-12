import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
export default () => {
  const [size, setSize] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [color, setColor] = useState(0)

  const style = {
    width: size + 'px',
    height: size + 'px',
    transform: 'rotate(' + rotation + 'deg)',
    backgroundColor: color,
  }

  return (
    <div className="App">
      <label>
        Size:{' '}
        <input value={size} onChange={handleChange} type="range" max="200" />
      </label>
      <label>
        Rotation:
        <input
          value={rotation}
          onChange={handleRotation}
          type="range"
          max="360"
        />
      </label>
      <label>
        Color:
        <input value={color} onChange={handleColor} type="color" max="200" />
      </label>
      <div style={style} className="Box" />
    </div>
  )
  function handleChange(event) {
    const input = event.target
    setSize(input.value)
  }
  function handleRotation(event) {
    const input = event.target
    setRotation(input.value)
  }
  function handleColor(event) {
    const input = event.target
    setColor(input.value)
  }
}
