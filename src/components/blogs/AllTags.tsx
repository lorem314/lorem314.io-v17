import React from "react"

type Tag = {
  name: string
  count: number
}

const AllTags = ({
  allTags,
  selectedTags,
  handleSelectTag,
}: {
  allTags: { name: string; count: number }[]
  selectedTags: { name: string; count: number }[]
  handleSelectTag: (
    tag: Tag
  ) => (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {
  return (
    <ul className="flex items-center flex-wrap gap-[10px]">
      {allTags.map((tag) => {
        const isSelected = selectedTags.includes(tag)
        return (
          <li key={tag.name}>
            <button
              className={`px-2 py-1 border ${
                isSelected
                  ? "text-gray-100 border-transparent bg-blue-800 hover:bg-blue-700 active:bg-blue-600 "
                  : "text-gray-900 border-gray-400 hover:bg-gray-200 active:bg-gray-300 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800"
              }`}
              onClick={handleSelectTag(tag)}
            >
              {tag.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
// text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
export default AllTags
