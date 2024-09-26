import { allBookCovers, type BookCover } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Image from "next/image"

export default function Page({ params }: { params: { title: string } }) {
  const bookCover = allBookCovers.find((bookCover) => {
    return bookCover.title === decodeURI(params.title)
  })

  if (!bookCover) return notFound()

  return (
    <div className="page-content max-w-[32rem] mx-auto my-[2rem]">
      <div>
        <h3>{bookCover.title}</h3>
        <h4>subtitle</h4>
        <Image
          src={bookCover.cover}
          alt={`${bookCover}的封面`}
          width={250}
          height={328}
        />
      </div>
    </div>
  )
}
