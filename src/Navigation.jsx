import './Navigation.css'
import * as React from 'react'
import Button from './Button'

export default function Navigation({ home, about, imprint }) {
  return (
    <nav className="Navigation">
      <Button isActive={home === true}>Home</Button>
      <Button isActive={about === true}>About</Button>
      <Button isActive={imprint === true}>Imprint</Button>
    </nav>
  )
}
