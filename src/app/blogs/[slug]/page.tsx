import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

import CodeHikePre from "@/components/elements/CodeHikePre"
import Tags from "@/components/blogs/Tags"
import Article from "@/components/article/Article"
import { H1 } from "@/components/elements/headings"

export default function Page({ params }: { params: { slug: string } }) {
  const post = allBlogs.find(
    (post) =>
      post._raw.flattenedPath === `blogs/${decodeURIComponent(params.slug)}`
  )

  if (!post) return notFound()

  const MDXContent = useMDXComponent(post.body.code)

  const renderedMDX = (
    <MDXContent
      components={{
        CodeHikePre,
      }}
    />
  )

  return (
    <Article
      header={
        <header className="page-content mb-[10px]">
          <H1>{post.title}</H1>
          <Tags tags={post.tags} />
        </header>
      }
      renderedBody={renderedMDX}
      toc={post.meta.toc}
      footer={
        <footer className="page-content mt-[10px]">
          <div>relative articles</div>
        </footer>
      }
    />
  )
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === `blogs/${decodeURIComponent(slug)}`
  )
  if (!post)
    return {
      title: "404",
    }

  return {
    title: `${post.title} | 博客 | lorem314.io-v17`,
  }
}
