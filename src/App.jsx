import * as React from 'react'
import './App.css'
import Card from './Card'
import Header from './Header'
import Pagination from './Pagination'
import Navigation from './Navigation'

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
    tags: ['spanish', 'street', 'friends'],
  },
  {
    title: 'Grüße',
    textQuestion: 'Geht´s dir gut?',
    isActive: true,
    id: 3,
    showAnswer: true,
    textAnswer: 'jop und bei dir?',
    tags: ['german', 'street', 'friends'],
  },
]

export default function App() {
  return (
    <div className="App">
      <div>
        <Header>Cards</Header>
      </div>
      <div className="divCards">
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

        <Pagination currentPage={1} totalPages={34} />
        <Pagination currentPage={2} totalPages={34} />
        <Pagination currentPage={34} totalPages={34} />
      </div>

      <div>
        <Navigation home={true} about={false} imprint={false} />
        <Navigation home={false} about={true} imprint={false} />
        <Navigation home={false} about={false} imprint={true} />
      </div>
    </div>
  )
}
