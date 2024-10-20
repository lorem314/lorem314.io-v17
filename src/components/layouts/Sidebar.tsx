"use client"
import React, { ReactNode } from "react"
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

const Sidebar = ({
  onCloseDrawer,
  children,
}: {
  onCloseDrawer?: () => void
  children?: ReactNode
}) => {
  return (
    <nav className="Bg-1 w-full h-full flex flex-row max-w-[320px]">
      {/*  */}

      <ul className="Bg-0 basis-[50px] shrink-0 pt-[10px] flex flex-col items-center gap-[10px]">
        {routes.map((route, index) => {
          const { Icon, title, href } = route
          return (
            <li key={index} className="flex justify-center items-center">
              <Link
                href={href}
                className="p-2 rounded-md text-[#505050] dark:text-[#a7a7a7] bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(199,199,199,0.08)] hover:bg-[rgba(0,0,0,0.2)] dark:hover:bg-[rgba(199,199,199,0.15)] active:text-[#f7f7f7] dark:active:text-[#0e0e0e] active:bg-[#585858] dark:active:bg-[#7d7d7d]"
                title={title}
                onClick={() => {
                  if (onCloseDrawer) {
                    onCloseDrawer()
                  }
                }}
              >
                <Icon className="w-[18px] h-[18px]" />
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="PageContent w-full basis-auto overflow-y-auto mt-[10px] mx-[10px] p-[10px]">
        {children}
      </div>

      {/*  */}
    </nav>
  )
}

export default React.memo(Sidebar)
