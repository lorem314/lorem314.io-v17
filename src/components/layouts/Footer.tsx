import React from "react"

import { FaBilibili } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="text-gray-600 text-center mx-[-10px] py-4 bg-white">
      <div>lorem314.io-v17</div>
      <div>该网站使用 NextJS 制作 | 在 Vercel 上部署</div>
      <div>
        如发现错误或有改进建议 欢迎
        <a href="" className="mx-1 text-slate-700">
          <FaGithub className="inline w-[17px] h-[17px] mx-1" />
          <span>提出</span>
        </a>
        或
        <a href="" className="mx-1 text-pink-700">
          <FaBilibili className="inline w-[17px] h-[17px] mx-1" />
          私信
        </a>
      </div>
    </footer>
  )
}

export default Footer
