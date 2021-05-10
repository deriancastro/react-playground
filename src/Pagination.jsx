import './Pagination.css'
import * as React from 'react'

export default ({ buttonLeftActive, page, buttonRightActive }) => {
  return (
    <section className="Pagination">
      <button
        className={
          buttonLeftActive
            ? 'ButtonPagination activePagination'
            : 'ButtonPagination'
        }
      >
        &lt;
      </button>
      <span className="Span">{page}</span>
      <button
        className={
          buttonRightActive
            ? 'ButtonPagination activePagination'
            : 'ButtonPagination'
        }
      >
        &gt;
      </button>
    </section>
  )
}
