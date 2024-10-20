"use client"
import React, {
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
  type MouseEvent,
  type ChangeEvent,
} from "react"
import { allBlogs, type Blog } from "contentlayer/generated"

import Search from "@/components/blogs/Search"
import Select from "@/components/blogs/Select"
import BlogList from "@/components/blogs/BlogList"
import AllTags from "@/components/blogs/AllTags"
import Drawer from "@/components/ui/Drawer"
import useDebounce from "@/hooks/useDebounce"

import GlobalContext from "@/GlobalContext"

type Tag = {
  name: string
  count: number
}

const BlogsPage = () => {
  const { hasRightDrawer, isRightDrawerOpen, handleRightDrawer } =
    useContext(GlobalContext)

  const [blogs, setBlogs] = useState(allBlogs)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [isOrLogic, setIsOrLogic] = useState(true)
  const allTags = useMemo(() => collectAllTags(allBlogs), [])
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const handleSelectTag = useCallback(
    (tag: Tag) => (event: MouseEvent | KeyboardEvent) => {
      setSelectedTags((prevSelectedTags) => {
        const hasSelected = prevSelectedTags.includes(tag)
        if (hasSelected) {
          event.stopPropagation()
          return prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        } else {
          if (event.shiftKey) return [...prevSelectedTags, tag]
          else return [tag]
        }
      })
    },
    []
  )

  const clearSelectedTags = useCallback(() => setSelectedTags([]), [])

  const handleChangeSearchTerm = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value)
    },
    []
  )

  const toggleFilterLogic = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setIsOrLogic((_) => !_)
    },
    []
  )

  useEffect(() => {
    const blogs = allBlogs
      .filter((blog) => {
        if (debouncedSearchTerm.length === 0) return true
        const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase()
        const lowercasedBlogTitle = blog.title.toLowerCase()
        return lowercasedBlogTitle.includes(lowercasedSearchTerm)
      })
      .filter((blog) => {
        if (selectedTags.length === 0) return true
        return selectedTags
          .map((tag) => blog.tags.includes(tag.name))
          [isOrLogic ? "some" : "every"]((b) => b)
      })
    setBlogs(blogs)
  }, [debouncedSearchTerm, selectedTags, isOrLogic])

  return (
    <div className="mx-auto my-8 max-w-[64rem] grid grid-cols-5 gap-[10px]">
      {/*  */}

      <div className="PageContent col-span-5 grid grid-cols-2 gap-[10px]">
        <Search
          searchTerm={searchTerm}
          handleChangeSearchTerm={handleChangeSearchTerm}
        />
        <Select
          options={allTags}
          selectedTags={selectedTags}
          onSelectTag={handleSelectTag}
          clearSelectedTags={clearSelectedTags}
          isOrLogic={isOrLogic}
          toggleFilterLogic={toggleFilterLogic}
        />
      </div>

      <div
        className={`PageContent ${
          hasRightDrawer ? "col-span-full" : "col-span-3"
        }`}
      >
        <h3 className="ContentTitle">
          博客({blogs.length}/{allBlogs.length})
        </h3>
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
            <AllTags
              allTags={allTags}
              selectedTags={selectedTags}
              handleSelectTag={handleSelectTag}
            />
          </div>
        </Drawer>
      ) : (
        <div className="PageContent col-span-2">
          <h3 className="ContentTitle">标签(999)</h3>
          <AllTags
            allTags={allTags}
            selectedTags={selectedTags}
            handleSelectTag={handleSelectTag}
          />
        </div>
      )}

      {/*  */}
    </div>
  )
}

export default BlogsPage

const collectAllTags = (blogs: Blog[]) => {
  const tags: Tag[] = []
  blogs.forEach((blog) => {
    blog.tags.forEach((tagName) => {
      const targetTag = tags.find((tag) => tag.name === tagName)
      if (!targetTag) tags.push({ name: tagName, count: 1 })
      else targetTag.count++
    })
  })
  return tags
}
