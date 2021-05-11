import './Card.css'
import * as React from 'react'

export default function Card({
  textQuestion,
  isActive,
  title,
  id,
  showAnswer,
  textAnswer,
  tags,
}) {
  const bookmarkClass = isActive ? 'Bookmark Selected' : 'Bookmark'
  const answerClass = showAnswer ? 'Answer' : 'Answer hidden'

  return (
    <section className="Card">
      <button className={bookmarkClass} aria-label="Bookmark card"></button>
      <h2 className="Question">
        {title} @{id}
      </h2>
      <p className="Text">{textQuestion}</p>
      <p className={answerClass}>{textAnswer}</p>
      <ul className="Tags">
        {tags.map(tag => (
          <li key={tag} className="Tag">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  )
}
