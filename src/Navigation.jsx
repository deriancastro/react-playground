import './Navigation.css'
import * as React from 'react'
import Button from './Button'

export default function Navigation({ page, isActive }) {
  console.log(page, isActive)
  return (
    <nav className="Navigation">
      <Button isActive={isActive}>{page}</Button>
    </nav>
  )
}
