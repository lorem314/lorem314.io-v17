import { allBookCovers, allBookChapters } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Image from "next/image"

import BookChapterList from "@/components/books/BookChapterList"

export default function Page({ params }: { params: { title: string } }) {
  const bookCover = allBookCovers.find((bookCover) => {
    return (
      bookCover._raw.flattenedPath ===
      `books/${decodeURIComponent(params.title)}`
    )
  })
  if (!bookCover) return notFound()

  const chapters = allBookChapters.filter(
    (chapter) => chapter.isbn === bookCover.isbn
  )

  return (
    <section className="PageContent mx-auto my-[2rem] max-w-[22rem]">
      <h2 className="ContentTitle">{bookCover.title}</h2>
      <article>
        <header className="my-4">
          <Image
            className="mx-auto"
            src={bookCover.cover}
            alt={`${bookCover}的封面`}
            width={250}
            height={328}
          />
        </header>
        <h3 className="px-4 font-bold text-xl">{bookCover.title}</h3>
        <h4 className="px-4">{bookCover.subtitle}</h4>
        <footer className="my-2 px-4">
          <BookChapterList bookCover={bookCover} chapters={chapters} />
        </footer>
      </article>
    </section>
  )
}

export async function generateMetadata({
  params: { title },
}: {
  params: { title: string }
}) {
  const bookCover = allBookCovers.find((bookCover) => {
    return bookCover._raw.flattenedPath === `books/${decodeURI(title)}`
  })
  if (!bookCover) return { title: "404" }

  return {
    title: `${bookCover.title} | 书籍 | lorem314.io-v17`,
  }
}
