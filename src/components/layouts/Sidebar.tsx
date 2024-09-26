"use client"
import React from "react"
import Link from "next/link"

import { FaHome } from "react-icons/fa"
import { RiArticleFill } from "react-icons/ri"
import { FaBook } from "react-icons/fa"
import { RiSettings3Fill } from "react-icons/ri"

const routes = [
  { Icon: FaHome, title: "主页", href: "/" },
  { Icon: RiArticleFill, title: "博客", href: "/blogs" },
  { Icon: FaBook, title: "书籍", href: "/books" },
  { Icon: RiSettings3Fill, title: "设置", href: "/setting" },
]

const Sidebar = ({ onCloseDrawer }: { onCloseDrawer?: () => void }) => {
  return (
    <nav className="w-full h-full flex flex-row bg-[#f7f7f7] max-w-[320px]">
      <ul className="basis-[50px] shrink-0 pt-[10px] bg-[#e5e5e5] flex flex-col items-center gap-[10px]">
        {routes.map((route, index) => {
          const { Icon, title, href } = route
          return (
            <li key={index} className="flex justify-center items-center">
              <Link
                href={href}
                className="p-2 rounded-md bg-slate-300"
                title={title}
                onClick={() => {
                  if (onCloseDrawer) {
                    onCloseDrawer()
                  }
                }}
              >
                <Icon className="w-[18px] h-[18px] text-slate-800" />
              </Link>
            </li>
          )
        })}
      </ul>

      <section className="overflow-y-auto mt-[10px] mx-[10px] rounded p-[10px] bg-[#fdfdfd] shadow">
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
      </section>
    </nav>
  )
}

export default Sidebar
