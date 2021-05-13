import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [size, setSize] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [color, setColor] = useState(0)
  const [radius, setRadius] = useState(0)

  const style = {
    width: size + 'px',
    height: size + 'px',
    transform: 'rotate(' + rotation + 'deg)',
    backgroundColor: color,
    borderRadius: radius + 'px',
  }

  return (
    <div className="App">
      <label>
        Size:{' '}
        <input value={size} onChange={handleSize} type="range" max="200" />
      </label>
      <label>
        Rotation:{' '}
        <input
          value={rotation}
          onChange={handleRotation}
          type="range"
          max="360"
        />
      </label>
      <label>
        Radius:{' '}
        <input value={radius} onChange={handleRadius} type="range" max="100" />
      </label>
      <label>
        Color:{' '}
        <input value={color} onChange={handleColor} type="color" max="200" />
      </label>
      <div style={style} className="Box" />
    </div>
  )
  function handleSize(event) {
    const input = event.target
    setSize(input.value)
  }
  function handleRotation(event) {
    const input = event.target
    setRotation(input.value)
  }
  function handleRadius(event) {
    const input = event.target
    setRadius(input.value)
  }
  function handleColor(event) {
    const input = event.target
    setColor(input.value)
  }
}
