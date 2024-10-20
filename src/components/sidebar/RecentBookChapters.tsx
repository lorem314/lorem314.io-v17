import React from "react"
import Link from "next/link"
import { allBookChapters } from "contentlayer/generated"

const RecentBookChapters = () => {
  const bookChapters = allBookChapters
    .sort(
      (prevBookChapter, nextBookChapter) =>
        new Date(nextBookChapter.date).getTime() -
        new Date(prevBookChapter.date).getTime()
    )
    .slice(0, 4)

  return (
    <ul>
      {bookChapters.map((bookChapter) => {
        return (
          <li key={bookChapter._id}>
            <Link href={bookChapter._raw.sourceFileDir}>
              第 {bookChapter.chapter} 章 - {bookChapter.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default RecentBookChapters
