import React from "react"
import { type BookCover, allBookChapters } from "contentlayer/generated"

import BookCoverItem from "./BookCoverItem"

const BookCoverList = ({ bookCovers }: { bookCovers: BookCover[] }) => {
  const chaptersByIsbn = ObjectGroupBy(
    allBookChapters,
    (chapter) => chapter.isbn
  )
  return (
    <ul className="grid grid-cols-2 gap-[10px]">
      {bookCovers.map((bookCover) => {
        return (
          <li className="flex flex-col items-center" key={bookCover._id}>
            <BookCoverItem
              bookCover={bookCover}
              chapters={chaptersByIsbn[bookCover.isbn]}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default BookCoverList

const ObjectGroupBy = <T,>(
  items: T[],
  callbackFn: (arg0: T) => string | symbol
) => {
  return items.reduce(
    (
      obj: {
        [key: string | symbol]: T[]
      },
      item: T
    ) => {
      const key = callbackFn(item)
      if (!obj[key]) obj[key] = []
      obj[key].push(item)
      return obj
    },
    {}
  )
}
