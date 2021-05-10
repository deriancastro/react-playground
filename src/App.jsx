import * as React from 'react'
import Button from './Button'

export default () => {
  return (
    <div>
      <Button isActive={true}>Moin there</Button>
      <Button isActive={false}>Moin there</Button>
    </div>
  )
}
