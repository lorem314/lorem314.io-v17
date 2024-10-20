import React from "react"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"

const RecentBlogs = () => {
  const blogs = allBlogs
    .sort(
      (prevBlog, nextBlog) =>
        new Date(nextBlog.date).getTime() - new Date(prevBlog.date).getTime()
    )
    .slice(0, 4)

  return (
    <ul>
      {blogs.map((blog) => {
        return (
          <li key={blog._id}>
            <Link href={blog._raw.sourceFileDir}>{blog.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default RecentBlogs
