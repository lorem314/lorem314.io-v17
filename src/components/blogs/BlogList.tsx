import React from "react"
import { type Blog } from "contentlayer/generated"

import BlogItem from "./BlogItem"

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <ul>
      {blogs.map((blog) => {
        console.log("blog", blog)
        return (
          <li key={blog._id}>
            {/* <h4>{blog.title}</h4> */}
            <BlogItem blog={blog} />
          </li>
        )
      })}
    </ul>
  )
}

export default BlogList
