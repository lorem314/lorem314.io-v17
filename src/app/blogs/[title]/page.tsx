import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

import Tags from "@/components/blogs/Tags"
import Article from "@/components/article/Article"
import { H1 } from "@/components/elements/headings"
import { formateDate } from "@/utils/date"

import components from "@/components/elements"

export default function Page({
  params: { title },
}: {
  params: { title: string }
}) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === `blogs/${decodeURIComponent(title)}`
  )

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  const renderedMDX = <MDXContent components={components} />

  return (
    <Article
      header={
        <header className="PageContent px-8 py-6 mb-[10px]">
          <H1>{post.title}</H1>
          <Tags tags={post.tags} />
          <p>发布于 {formateDate(post.date)}</p>
        </header>
      }
      renderedBody={renderedMDX}
      title={post.title}
      toc={post.meta.toc}
      // footer={
      //   <footer className="PageContent mt-[10px]">
      //     <div>relative articles</div>
      //   </footer>
      // }
    />
  )
}

export async function generateMetadata({
  params: { title },
}: {
  params: { title: string }
}) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === `blogs/${decodeURIComponent(title)}`
  )
  if (!post)
    return {
      title: "404",
    }

  return {
    title: `${post.title} | 博客 | lorem314.io-v17`,
  }
}
