import React from "react"
import { type Blog } from "contentlayer/generated"

import BlogItem from "./BlogItem"

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <ul className="flex flex-col gap-[10px]">
      {blogs.map((blog) => {
        return (
          <li key={blog._id}>
            <BlogItem blog={blog} />
          </li>
        )
      })}
    </ul>
  )
}

export default BlogList
