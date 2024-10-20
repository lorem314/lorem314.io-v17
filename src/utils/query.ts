import {
  // allBlogs,
  // allBookCovers,
  allBookChapters,
  // type Blog,
  // type BookCover,
  // type BookChapter,
} from "contentlayer/generated"

export const getBookChaptersByIsbn = (isbn: string) => {
  return allBookChapters.filter((bookChapter) => bookChapter.isbn === isbn)
}

export const getBookCoverTitleByIsbn = (isbn: string) => {
  const result = allBookChapters.filter(
    (bookChapter) => bookChapter.isbn === isbn
  )
  if (result.length === 1) {
    return result[0].title
  } else {
    return null
  }
}

// export const getBookChaptersByBookCoverTitle = (title: string) => {}
