import React from "react"

const Select = () => {
  return (
    <div>
      <label className="content-title" htmlFor="blogs-select">
        筛选
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        type="text"
        id="blogs-select"
        placeholder="筛选标签"
      />
    </div>
  )
}

export default Select
