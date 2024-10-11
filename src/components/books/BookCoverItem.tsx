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
      <header className="mb-2">
        <Image
          src={bookCover.cover}
          alt={`${bookCover}的封面`}
          width={250}
          height={328}
        />
      </header>
      <h3 className="font-bold text-xl">
        <Link href={`/${bookCover._raw.sourceFileDir}`}>{bookCover.title}</Link>
      </h3>
      <h4 className="text-base">{bookCover.subtitle}</h4>
      <footer className="mt-2">
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
