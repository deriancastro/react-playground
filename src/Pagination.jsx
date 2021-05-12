import './Pagination.css'
import * as React from 'react'
import Button from './Button'

export default function Pagination({ currentPage, totalPages }) {
  return (
    <section className="Pagination">
      <Button isActive={currentPage !== 1}>&lt;</Button>
      <span className="Span">
        {currentPage}/{totalPages}
      </span>
      <Button isActive={currentPage !== totalPages}>&gt;</Button>
    </section>
  )
}
