"use client"
import React, { useState, useContext } from "react"
import { allBlogs } from "contentlayer/generated"

import Search from "@/components/blogs/Search"
import Select from "../../components/blogs/Select"
import BlogList from "@/components/blogs/BlogList"
import AllTag from "@/components/blogs/AllTag"
import Drawer from "@/components/ui/Drawer"

import GlobalContext from "@/GlobalContext"

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(allBlogs)
  const { hasRightDrawer, isRightDrawerOpen, handleRightDrawer } =
    useContext(GlobalContext)

  return (
    <div className="mx-auto my-8 max-w-[54rem] grid grid-cols-5 gap-[10px]">
      {/*  */}

      <div className="page-content col-span-5 grid grid-cols-2 gap-[10px]">
        <Search />
        <Select />
      </div>

      <div
        className={`page-content ${
          hasRightDrawer ? "col-span-full" : "col-span-3"
        }`}
      >
        <h3 className="content-title">博客(999)</h3>
        <BlogList blogs={blogs} />
      </div>

      {hasRightDrawer ? (
        <Drawer
          isOpen={!!isRightDrawerOpen}
          placement="right"
          size={320}
          onClose={handleRightDrawer.close}
          title="标签"
        >
          <div className="p-[10px]">
            <AllTag />
          </div>
        </Drawer>
      ) : (
        <div className="page-content col-span-2">
          <h3 className="content-title">标签(999)</h3>
          <AllTag />
        </div>
      )}

      {/*  */}
    </div>
  )
}

export default BlogsPage
