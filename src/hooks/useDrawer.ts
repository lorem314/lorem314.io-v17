"use client"
import { useEffect, useState, useCallback } from "react"

const useDrawer = ({ isAlwaysCollapsed = false, breakPoint = 0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakPoint : null
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsCollapsed(isAlwaysCollapsed || window.innerWidth <= breakPoint)
  }, [isAlwaysCollapsed, breakPoint])

  useEffect(() => {
    const handleWindowResize = () => {
      setIsCollapsed((prevIsCollapsed) => {
        const nextIsCollapsed =
          isAlwaysCollapsed || window.innerWidth <= breakPoint
        if (prevIsCollapsed && !nextIsCollapsed && !isAlwaysCollapsed) {
          setIsOpen(false)
        }
        return nextIsCollapsed
      })
    }

    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [isAlwaysCollapsed, breakPoint])

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleClose = useCallback(() => setIsOpen(false), [])

  return {
    isCollapsed,
    isOpen,
    handler: {
      open: handleOpen,
      close: handleClose,
    },
  }
}

export default useDrawer
