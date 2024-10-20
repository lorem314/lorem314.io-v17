import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import { allBookChapters } from "contentlayer/generated"

import CodeHikePre from "@/components/elements/CodeHikePre"
import Article from "@/components/article/Article"
import Link from "next/link"

export default function Page({
  params: { chapter, title },
}: {
  params: { chapter: string; title: string }
}) {
  const bookChapter = allBookChapters.find(
    (bookChapter) =>
      bookChapter._raw.flattenedPath ===
      `books/${decodeURIComponent(title)}/${decodeURI(chapter)}`
  )

  if (!bookChapter) notFound()

  const MDXContent = useMDXComponent(bookChapter.body.code)

  const renderedMDX = (
    <MDXContent
      components={{
        CodeHikePre,
        blockquote: (props) => (
          <blockquote className="my-4 border-l-4 border-neutral-400 px-4 py-2 bg-slate-200 dark:bg-slate-700">
            {props.children}
          </blockquote>
        ),
        a: (props) => <Link href={props.href || "/"}>{props.children}</Link>,
        p: (props) => <p className="my-4">{props.children}</p>,
      }}
    />
  )

  return (
    <Article
      header={
        <header className="PageContent mb-[10px]">
          <div className="text-xl font-bold mb-1 text-right">
            第 {bookChapter.chapter} 章
          </div>
          <hr />
          <h1 className="text-xl font-bold mt-1 text-right">
            {bookChapter.title}
          </h1>
        </header>
      }
      renderedBody={renderedMDX}
      toc={bookChapter.meta.toc}
      footer={
        <footer className="PageContent mt-[10px]">
          <div>relative articles</div>
        </footer>
      }
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: { chapter: string; title: string }
}) {
  const title = decodeURIComponent(params.title)
  const chapter = decodeURI(params.chapter)
  const bookChapter = allBookChapters.find(
    (bookChapter) =>
      bookChapter._raw.flattenedPath === `books/${title}/${chapter}`
  )
  if (!bookChapter) {
    return {
      title: "404 | lorem314.io-v17",
    }
  }

  return {
    title: `第 ${bookChapter.chapter} 章 - ${bookChapter.title} | ${title} | 书籍 | lorem314.io-v17`,
  }
}
