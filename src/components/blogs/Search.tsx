import React from "react"

const Search = ({
  searchTerm,
  handleChangeSearchTerm,
}: {
  searchTerm: string
  handleChangeSearchTerm: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div>
      <label className="ContentTitle" htmlFor="blogs-search">
        搜索
      </label>
      <input
        type="search"
        id="blogs-search"
        placeholder="搜索标题"
        autoComplete="off"
        value={searchTerm}
        onChange={handleChangeSearchTerm}
      />
    </div>
  )
}

export default Search
