import React from "react"
import Link from "next/link"
import Image from "next/image"
import { type BookCover, type BookChapter } from "contentlayer/generated"

const BookCoverItem = ({
  bookCover,
  chapters,
}: {
  bookCover: BookCover
  chapters: BookChapter[]
}) => {
  return (
    <article>
      <header className="my-4">
        <Image
          src={bookCover.cover}
          alt={`${bookCover}的封面`}
          width={250}
          height={328}
        />
      </header>
      <h3 className="px-2 font-bold text-xl">
        <Link href={`/${bookCover._raw.sourceFileDir}`}>{bookCover.title}</Link>
      </h3>
      <h4 className="px-2">{bookCover.subtitle}</h4>
      <footer className="my-2 px-4">
        <ul>
          {chapters.map((chapter) => {
            return (
              <li key={chapter._id}>
                <h5>
                  <Link href={`/${chapter._raw.sourceFileDir}`}>
                    第 {chapter.chapter} 章 - {chapter.title}
                  </Link>
                </h5>
              </li>
            )
          })}
        </ul>
      </footer>
    </article>
  )
}

export default BookCoverItem
