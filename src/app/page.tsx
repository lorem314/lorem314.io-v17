import { Metadata } from "next"

import RecentBlogs from "@/components/sidebar/RecentBlogs"
import RecentBookChapters from "@/components/sidebar/RecentBookChapters"

export default function Home() {
  return (
    <div className="PageContent max-w-[32rem] mx-auto my-8">
      <h2 className="font-bold text-center text-lg">欢迎来到我的博客</h2>

      <section className="my-4">
        <h3 className="ContentTitle">最近发布博客</h3>
        <RecentBlogs />
      </section>

      <section className="my-4">
        <h3 className="ContentTitle">最近翻译书籍</h3>
        <RecentBookChapters />
      </section>
    </div>
  )
}

export const metadata: Metadata = {
  title: "主页 | lorem314.io-v17",
}
