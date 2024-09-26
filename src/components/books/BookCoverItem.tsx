import React from "react"
import Link from "next/link"
import Image from "next/image"
import { type BookCover } from "contentlayer/generated"

const BookCoverItem = ({ bookCover }: { bookCover: BookCover }) => {
  return (
    <article>
      <header>
        <h3>
          <Link href={bookCover._raw.sourceFileDir}>{bookCover.title}</Link>
        </h3>
      </header>
      <Image
        src={bookCover.cover}
        alt={`${bookCover}的封面`}
        width={250}
        height={328}
      />
    </article>
  )
}

export default BookCoverItem
