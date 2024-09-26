"use client"
import React, { useEffect } from "react"
import { allBookCovers } from "contentlayer/generated"

import BookCoverList from "@/components/books/BookCoverList"

const BooksPage = () => {
  useEffect(() => {
    console.log("allBookCovers", allBookCovers)
  }, [])

  return (
    <div className="my-8 mx-auto p-2 rounded shadow bg-white max-w-[32rem]">
      <h2 className="content-title">书籍(999)</h2>
      <BookCoverList bookCovers={allBookCovers} />
    </div>
  )
}

export default BooksPage
