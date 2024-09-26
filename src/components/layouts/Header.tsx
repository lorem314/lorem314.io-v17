import React from "react"
import Link from "next/link"

import { FaMagnifyingGlass } from "react-icons/fa6"
import { RiMenu2Line } from "react-icons/ri"

import Social from "./Social"
import { geistSans } from "@/fonts/font"

const Header = ({
  hasLeftDrawer,
  handleLeftDrawer,
}: {
  hasLeftDrawer: boolean | null
  handleLeftDrawer: { open: () => void; close: () => void }
}) => {
  // console.log("hasLeftDrawer", hasLeftDrawer)
  return (
    <header className="h-[50px] px-[10px] text-white bg-[#2c5c97] shadow-[0_1px_0_0_rgba(0,0,0,0.1)] flex items-center gap-[10px]">
      {/*  */}

      {hasLeftDrawer ? (
        <button
          className="p-1.5 rounded bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)]"
          onClick={() => {
            handleLeftDrawer.open()
          }}
        >
          <RiMenu2Line className="w-5 h-5" />
        </button>
      ) : null}

      <h1 className={`text-lg ${geistSans.className} antialiased`}>
        <Link href="/">lorem314.io</Link>
      </h1>

      <div className="flex-grow flex justify-center text-sm">
        <button className="flex-grow-0 flex-shrink basis-[32rem] ring-1 ring-white px-2 py-1 rounded flex items-center gap-2">
          <FaMagnifyingGlass />
          <span>
            <span>搜索</span>
            <span>
              <kbd>Ctrl</kbd>
              <kbd>K</kbd>
            </span>
          </span>
        </button>
      </div>

      <Social />

      <div id="anchor-2"></div>

      {/*  */}
    </header>
  )
}

export default Header
