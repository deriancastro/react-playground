import './Card.css'
import * as React from 'react'

export default ({ children, isActive, title }) => {
  return (
    <section className="Card">
      <button className={isActive ? 'Bookmark Selected' : 'Bookmark'}></button>
      <h2 className="Question">{title}</h2>
      <p className="Text">{children}</p>
    </section>
  )
}
