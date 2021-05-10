import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'

export default () => {
  return (
    <div>
      <Pagination
        buttonLeftActive={false}
        page="1/34"
        buttonRightActive={true}
      />
      <Pagination
        buttonLeftActive={true}
        page="22/34"
        buttonRightActive={true}
      />
      <Pagination
        buttonLeftActive={true}
        page="34/34"
        buttonRightActive={false}
      />
      <Button isActive={false}>Button: unactive</Button>
      <Button isActive={true}>Button: active</Button>
    </div>
  )
}
