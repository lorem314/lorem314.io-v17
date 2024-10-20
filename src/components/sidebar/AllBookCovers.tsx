import React from "react"
import Link from "next/link"
import Image from "next/image"
import { allBookCovers } from "contentlayer/generated"

const AllBookCovers = () => {
  return (
    <ul className="flex flex-col gap-4">
      {allBookCovers.map((bookCover) => {
        return (
          <li key={bookCover._id}>
            <Image
              className="mx-auto"
              src={bookCover.cover}
              alt={`封面-${bookCover.title}`}
              width={250 * 0.75}
              height={328 * 0.75}
            />
            <h3 className="text-lg font-bold my-1">
              <Link href={bookCover._raw.sourceFileDir}>{bookCover.title}</Link>
            </h3>
            <h4 className="text-gray-600">{bookCover.subtitle}</h4>
          </li>
        )
      })}
    </ul>
  )
}

export default AllBookCovers
