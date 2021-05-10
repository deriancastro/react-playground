import * as React from 'react'
import Card from './Card'
import Header from './Header'

export default () => {
  return (
    <div className="App">
      <Header>Cards</Header>
      <Card title="Title" isActive={true}>
        Lorem ipsum dolor sit.
      </Card>
      <Card title="Title" isActive={false}>
        Lorem ipsum dolor sit.
      </Card>
    </div>
  )
}
