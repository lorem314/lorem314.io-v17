import React from "react"

const Search = () => {
  return (
    <div>
      <label className="content-title" htmlFor="blogs-search">
        搜索
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        type="search"
        id="blogs-search"
        placeholder="搜索标题"
      />
    </div>
  )
}

export default Search
