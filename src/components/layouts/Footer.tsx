import React from "react"

import { FaBilibili, FaGithub } from "react-icons/fa6"
import { RiNextjsLine } from "react-icons/ri"
import { TbBrandVercel } from "react-icons/tb"

const Footer = () => {
  return (
    <footer className="text-gray-600 text-center mx-[-10px] py-4 bg-white">
      <div>lorem314.io-v17</div>
      <div>
        该网站使用
        <a href="" className="mx-1 text-black">
          <RiNextjsLine className="inline w-[18px] h-[18px] mx-1" />
          <span>NextJS</span>
        </a>
        制作<span className="font-bold text-black"> | </span>在
        <a href="" className="mx-1 text-black">
          <TbBrandVercel className="inline w-[18px] h-[18px] mx-1" />
          <span>Vercel</span>
        </a>
        上部署
      </div>
      <div>
        如发现错误或有改进建议 欢迎
        <a href="" className="mx-1 text-slate-600">
          <FaGithub className="inline w-[18px] h-[18px] mx-1" />
          <span>提出</span>
        </a>
        或
        <a href="" className="mx-1 text-pink-700">
          <FaBilibili className="inline w-[18px] h-[18px] mx-1" />
          私信
        </a>
      </div>
    </footer>
  )
}

export default Footer
