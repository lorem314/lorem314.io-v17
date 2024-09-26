import React from "react"

import { IoArrowBackSharp } from "react-icons/io5"
import { BiSolidArrowToTop } from "react-icons/bi"
import { MdFullscreen, MdFullscreenExit } from "react-icons/md"

const Actions = () => {
  return (
    <ul className=" flex flex-col items-center gap-[10px] sticky top-[10px]">
      <li className="flex justify-center items-center">
        <button className="page-content hover:text-blue-800">
          <IoArrowBackSharp className="w-5 h-5" />
        </button>
      </li>
      <li className="flex justify-center items-center">
        <button className="page-content hover:text-blue-800">
          <BiSolidArrowToTop className="w-5 h-5" />
        </button>
      </li>
      <li className="flex justify-center items-center">
        <button className="page-content hover:text-blue-800">
          <MdFullscreen className="w-5 h-5" />
        </button>
      </li>
      <li className="flex justify-center items-center">
        <button className="page-content hover:text-blue-800">
          <MdFullscreenExit className="w-5 h-5" />
        </button>
      </li>
    </ul>
  )
}

export default Actions
