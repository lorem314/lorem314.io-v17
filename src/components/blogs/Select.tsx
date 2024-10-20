import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  type MouseEvent,
  type ChangeEvent,
} from "react"

import { FaCaretDown } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import { GiLogicGateAnd, GiLogicGateOr } from "react-icons/gi"

import useDebounce from "@/hooks/useDebounce"

type Tag = {
  name: string
  count: number
}

const Select = ({
  options,
  selectedTags,
  onSelectTag,
  clearSelectedTags,
  isOrLogic,
  toggleFilterLogic,
}: {
  options: Tag[]
  selectedTags: Tag[]
  onSelectTag: (tag: Tag) => (event: MouseEvent | KeyboardEvent) => void
  clearSelectedTags: () => void
  isOrLogic: boolean
  toggleFilterLogic: (event: MouseEvent<HTMLButtonElement>) => void
}) => {
  const refSelectedTags = useRef<HTMLUListElement>(null)
  const refTagInput = useRef<HTMLInputElement>(null)
  const refOptions = useRef<HTMLUListElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [term, setTerm] = useState("")
  const debouncedTerm = useDebounce(term)

  // close ul.options when click outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false)
    }
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  // nodeSelectedTags horizontal wheel
  useEffect(() => {
    const nodeSelectedTags = refSelectedTags.current
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY === 0 || !event.shiftKey) return
      nodeSelectedTags?.scrollBy({ left: event.deltaY < 0 ? -12 : 12 })
    }
    if (nodeSelectedTags) {
      nodeSelectedTags.addEventListener("wheel", handleWheel, { passive: true })
    }
    return () => {
      nodeSelectedTags?.removeEventListener("wheel", handleWheel)
    }
  }, [selectedTags])

  const handleSelectTag = useCallback(
    (tag: Tag) => (event: MouseEvent | KeyboardEvent) => {
      if (event.stopPropagation) {
        event.stopPropagation()
      }
      if (!event.shiftKey) {
        setIsOpen(false)
      }
      onSelectTag(tag)(event)
    },
    [onSelectTag]
  )

  const filteredOptions = options.filter((option) => {
    if (debouncedTerm === "") return true
    return option.name.includes(debouncedTerm)
  })

  // tag input listens to key press event
  useEffect(() => {
    const nodeTagInput = refTagInput.current

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target !== nodeTagInput) return
      switch (event.code) {
        case "Escape":
          setIsOpen(false)
          break
        case "Enter":
        case "NumpadEnter":
        case "Space":
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
          } else {
            if (hoveredIndex !== -1) {
              handleSelectTag(filteredOptions[hoveredIndex])(event)
            }
            setIsOpen(false)
          }
          break
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            break
          }
          if (hoveredIndex === -1) {
            setHoveredIndex(() => 0)
          }
          const indexAddend = event.code === "ArrowDown" ? 1 : -1
          const newHoveredIndex = hoveredIndex + indexAddend
          if (newHoveredIndex >= 0 && newHoveredIndex < options.length) {
            setHoveredIndex(newHoveredIndex)
            const nodeOptions = refOptions.current
            const nodeNextHoveredLi = nodeOptions?.querySelector<HTMLLIElement>(
              `li:nth-of-type(${newHoveredIndex + 1})`
            )
            if (!nodeNextHoveredLi || !nodeOptions) return
            if (event.code === "ArrowUp") {
              if (nodeNextHoveredLi.offsetTop < nodeOptions.scrollTop) {
                nodeOptions.scrollTop = nodeNextHoveredLi.offsetTop
              }
            } else if (event.code === "ArrowDown") {
              if (
                nodeNextHoveredLi.offsetTop + nodeNextHoveredLi.offsetHeight >
                nodeOptions.scrollTop + nodeOptions.clientHeight
              ) {
                nodeOptions.scrollTop =
                  (newHoveredIndex - 3) * nodeNextHoveredLi.offsetHeight
              }
            }
          }
          return
        default:
          return
      }
    }

    if (nodeTagInput) {
      nodeTagInput.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      nodeTagInput?.removeEventListener("keydown", handleKeyDown)
    }
  }, [
    isOpen,
    hoveredIndex,
    options,
    selectedTags,
    handleSelectTag,
    clearSelectedTags,
    filteredOptions,
  ])

  const handleMouseEnterOption = useCallback(
    (index: number) => () => setHoveredIndex(index),
    []
  )
  const handleMouseLeaveOptions = useCallback(() => setHoveredIndex(-1), [])

  const handleChangeTerm = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setHoveredIndex(-1)
      setTerm(event.target.value)
      setIsOpen(true)
    },
    []
  )

  const toggleIsOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setIsOpen((prevIsOpen) => !prevIsOpen)
    },
    []
  )

  return (
    <div className="relative">
      <label className="ContentTitle" htmlFor="blogs-select">
        筛选
      </label>

      {/* select-input-group */}
      <div
        className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 rounded flex items-center"
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        {selectedTags.length !== 0 ? (
          <ul
            ref={refSelectedTags}
            className="flex-grow-0 flex-shrink-0 basis-auto pl-2 flex items-center gap-2 max-w-[120px] overflow-hidden"
          >
            {selectedTags.map((tag) => {
              return (
                <li key={tag.name}>
                  <button
                    className="text-sm px-2 py-1 text-gray-100 border-transparent bg-blue-800 hover:bg-blue-700 active:bg-blue-600"
                    onClick={handleSelectTag(tag)}
                  >
                    {tag.name}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}

        <input
          id="blogs-select"
          className="ResetInputRingShadow border-none focus:shadow-none"
          type="text"
          placeholder="筛选标签"
          ref={refTagInput}
          value={term}
          onChange={handleChangeTerm}
          onFocus={() => {
            setIsOpen(true)
          }}
        />

        {/* actions */}
        <div className="px-1 self-center flex-shrink-0 flex items-center gap-1">
          {selectedTags.length !== 0 ? (
            <button
              className="opacity-50 hover:opacity-100"
              onClick={clearSelectedTags}
            >
              <IoCloseSharp className="w-5 h-5" />
            </button>
          ) : null}
          {selectedTags.length >= 2 ? (
            <button
              className="opacity-50 hover:opacity-100"
              onClick={toggleFilterLogic}
            >
              {isOrLogic ? (
                <GiLogicGateOr className="w-5 h-5" />
              ) : (
                <GiLogicGateAnd className="w-5 h-5" />
              )}
            </button>
          ) : null}
          <button
            className="opacity-50 hover:opacity-100"
            onClick={toggleIsOpen}
          >
            <FaCaretDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* option list */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } w-full rounded border border-gray-300 dark:border-gray-600 bg-LightPageContentBg dark:bg-DarkPageContentBg absolute top-full my-2 overflow-y-auto max-h-32`}
        ref={refOptions}
        onMouseLeave={handleMouseLeaveOptions}
      >
        {filteredOptions.length === 0 ? (
          <li className="h-8 px-2 flex items-center">
            <p>没有符合查询的结果...</p>
          </li>
        ) : (
          filteredOptions.map((tag, index) => {
            const isHovered = index === hoveredIndex
            return (
              <li
                key={tag.name}
                className={`${
                  isHovered ? "bg-neutral-200 dark:bg-neutral-600" : ""
                } cursor-pointer px-2 h-8 flex items-center`}
                onMouseEnter={handleMouseEnterOption(index)}
                onClick={handleSelectTag(tag)}
              >
                <button
                  className="w-full flex justify-between items-center"
                  onClick={handleSelectTag(tag)}
                >
                  <span>{tag.name}</span>
                  <span>{tag.count}</span>
                </button>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default Select

// const allTags = [
//   { name: "HTML", count: 999 },
//   { name: "学习 React", count: 99 },
//   { name: "性能优化", count: 9 },
//   { name: "React Redux", count: 123 },
//   { name: "自说自话", count: 456 },
// ]
