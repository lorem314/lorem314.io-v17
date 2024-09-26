import { allBlogs, type Blog } from "contentlayer/generated"
import { notFound } from "next/navigation"

import { InlineAnnotation } from "codehike/code"
import type { AnnotationHandler, RawCode } from "codehike/code"
import { Pre, highlight } from "codehike/code"

import Article from "@/components/article/Article"

export default function Page({ params }: { params: { slug: string } }) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === `blogs/${decodeURI(params.slug)}`
  )

  if (!post) return notFound()

  return (
    <>
      <Article
        header={
          <header className="page-content mb-[10px]">
            <h1 className="text-4xl">{post.title}</h1>
          </header>
        }
        body={post.body}
        footer={
          <footer className="page-content mt-[10px]">
            <div>上一章 下一章</div>
          </footer>
        }
      />
    </>
  )
}
