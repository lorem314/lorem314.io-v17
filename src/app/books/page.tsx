import React from "react"
import { allBookCovers } from "contentlayer/generated"

import BookCoverList from "@/components/books/BookCoverList"

const BooksPage = () => {
  return (
    <section className="PageContent mx-auto my-8 max-w-[48rem]">
      <h2 className="ContentTitle">书籍({allBookCovers.length})</h2>
      <BookCoverList bookCovers={allBookCovers} />
    </section>
  )
}

export default BooksPage
