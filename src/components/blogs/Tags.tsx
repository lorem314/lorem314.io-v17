import React from "react"

const Tags = ({ tags }: { tags: string[] | undefined }) => {
  return tags ? (
    <ul className="my-2 flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        return (
          <li
            key={index}
            className="border border-gray-300 px-2 py-1 rounded text-sm"
          >
            {tag}
          </li>
        )
      })}
    </ul>
  ) : null
}

export default Tags
