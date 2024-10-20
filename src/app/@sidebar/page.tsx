import React from "react"

import RecentBlogs from "@/components/sidebar/RecentBlogs"
import RecentBookChapters from "@/components/sidebar/RecentBookChapters"

const Page = () => {
  return (
    <>
      <section className="w-full my-4">
        <h3 className="ContentTitle">最近发布博客</h3>
        <RecentBlogs />
      </section>

      <section className="w-full my-4">
        <h3 className="ContentTitle">最近翻译书籍</h3>
        <RecentBookChapters />
      </section>
    </>
  )
}

export default Page
