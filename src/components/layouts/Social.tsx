import React from "react"

import { FaCodepen } from "react-icons/fa"
// import { GrCodeSandbox } from "react-icons/gr"
import { SiCodesandbox } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { FaBilibili } from "react-icons/fa6"

const links = [
  { Icon: FaCodepen, title: "Codepen", href: "https://codepen.io/Number_DDD" },
  {
    Icon: SiCodesandbox,
    title: "CodeSandbox",
    href: "https://codesandbox.io/u/lorem314",
  },
  { Icon: FaGithub, title: "Github", href: "https://github.com/lorem314" },
  {
    Icon: FaBilibili,
    title: "Bilibili",
    href: "https://space.bilibili.com/7909744/",
  },
]

const Social = () => {
  return (
    <ul className="flex items-center gap-[10px]">
      {links.map((link, index) => {
        const { Icon, title, href } = link
        return (
          <li key={index} className="">
            <a
              className="flex items-center gap-1 opacity-75 hover:opacity-100 p-2 bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] rounded md:bg-transparent md:hover:bg-transparent md:p-0 text-inherit"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-5 h-5 md:w-4 md:h-4" />
              <span className="hidden md:inline">{title}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Social
