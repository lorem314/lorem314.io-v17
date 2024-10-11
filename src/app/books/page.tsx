import React from "react"
import { allBookCovers } from "contentlayer/generated"

import BookCoverList from "@/components/books/BookCoverList"

const BooksPage = () => {
  return (
    <section className="my-8 mx-auto p-2 rounded shadow bg-white max-w-[48rem]">
      <h2 className="content-title">书籍({allBookCovers.length})</h2>
      <BookCoverList bookCovers={allBookCovers} />
    </section>
  )
}

export default BooksPage
