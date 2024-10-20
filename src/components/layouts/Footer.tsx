import React from "react"

import { FaBilibili, FaGithub } from "react-icons/fa6"
import { RiNextjsLine } from "react-icons/ri"
import { TbBrandVercel } from "react-icons/tb"

const Footer = () => {
  return (
    <footer className="PageContent rounded-none text-center mx-[-10px] py-4">
      <div>lorem314.io-v17</div>
      <div>
        该网站使用
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 "
        >
          <RiNextjsLine className="inline w-[18px] h-[18px] mx-1" />
          <span>NextJS</span>
        </a>
        制作 在
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 "
        >
          <TbBrandVercel className="inline w-[18px] h-[18px] mx-1" />
          <span>Vercel</span>
        </a>
        上部署
      </div>
      <div>
        如发现错误或有改进建议 欢迎
        <a href="/" target="_blank" rel="noopener noreferrer" className="mx-1 ">
          <FaGithub className="inline w-[18px] h-[18px] mx-1" />
          <span>提出</span>
        </a>
        或
        <a href="/" target="_blank" rel="noopener noreferrer" className="mx-1 ">
          <FaBilibili className="inline w-[18px] h-[18px] mx-1" />
          私信
        </a>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
