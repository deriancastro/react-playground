import * as React from 'react'
import Card from './Card'
import Header from './Header'
import './App.css'

const cards = [
  {
    title: 'Greetings',
    textQuestion: 'How are you?',
    isActive: false,
    id: 1,
    showAnswer: true,
    textAnswer: 'great! Thanks',
    tags: ['english', 'informal', 'friends'],
  },
  {
    title: 'Saludos',
    textQuestion: 'Cómo vas?',
    isActive: true,
    id: 2,
    showAnswer: true,
    textAnswer: 'super bien, gracias',
    tags: ['spanish', 'informal', 'friends'],
  },
]

export default () => {
  return (
    <div className="App">
      <Header>Cards</Header>
      {cards.map(
        ({
          id,
          title,
          textQuestion,
          isActive,
          showAnswer,
          textAnswer,
          tags,
        }) => (
          <Card
            key={id}
            id={id}
            title={title}
            textQuestion={textQuestion}
            isActive={isActive}
            showAnswer={showAnswer}
            textAnswer={textAnswer}
            tags={tags}
          />
        )
      )}
    </div>
  )
}
