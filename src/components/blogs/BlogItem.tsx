import React from "react"
import Link from "next/link"
import { type Blog } from "contentlayer/generated"

import Tags from "./Tags"
import { formateDate, getTimeAgo } from "@/utils/date"

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <article>
      <header>
        <h4 className="text-lg font-bold">
          <Link href={blog._raw.sourceFileDir}>{blog.title}</Link>
        </h4>
      </header>
      <div className="text-neutral-400">
        {/* <span>{formateDate(blog.date)}</span> */}
        <span>发布于 {getTimeAgo(blog.date)}前</span>
        {blog.meta.statistic.codeblock !== 0 ? (
          <>
            <span className="font-bold"> · </span>
            <span>{blog.meta.statistic.codeblock} 个代码块</span>
          </>
        ) : null}
        {blog.meta.statistic.image !== 0 ? (
          <>
            <span className="font-bold"> · </span>
            <span>{blog.meta.statistic.image} 张图片</span>
          </>
        ) : null}
        {blog.meta.statistic.text !== 0 ? (
          <>
            <span className="font-bold"> · </span>
            <span>约 {blog.meta.statistic.text} 个字</span>
          </>
        ) : null}
      </div>
      <footer>
        <Tags tags={blog.tags} />
      </footer>
    </article>
  )
}

export default BlogItem
