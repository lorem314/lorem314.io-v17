import React from "react"
import { type BookCover } from "contentlayer/generated"

import BookCoverItem from "./BookCoverItem"

const BookCoverList = ({ bookCovers }: { bookCovers: BookCover[] }) => {
  return (
    <ul>
      {bookCovers.map((bookCover) => {
        return (
          <li key={bookCover._id}>
            <BookCoverItem bookCover={bookCover} />
          </li>
        )
      })}
    </ul>
  )
}

export default BookCoverList
