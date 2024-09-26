import React from "react"
import Link from "next/link"
import { type Blog } from "contentlayer/generated"

import Tags from "./Tags"

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <article>
      <header>
        <h4>
          <Link href={blog._raw.sourceFileDir}>{blog.title}</Link>
        </h4>
      </header>
      <Tags tags={blog.tags} />
    </article>
  )
}

export default BlogItem
