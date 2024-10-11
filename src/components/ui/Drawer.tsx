// "use client"
import React, { useState, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"

import { VscChromeClose } from "react-icons/vsc"

type Placement = "top" | "right" | "bottom" | "left"

const Drawer = ({
  isOpen = false,
  placement = "left",
  title = "",
  size = 360,
  onClose,
  children,
}: {
  isOpen: boolean
  placement?: Placement
  title?: string
  size: number
  onClose: () => void
  children: ReactNode
}) => {
  return isOpen ? (
    <Portal placement={placement} size={size} onClose={onClose} title={title}>
      {children}
    </Portal>
  ) : null
}

export default Drawer

const Portal = ({
  placement,
  size,
  onClose,
  children,
  title,
}: {
  placement: Placement
  size: number
  onClose: () => void
  children: ReactNode
  title: string
}) => {
  // const ref = useRef(null)
  const [styles, setStyles] = useState({
    opacity: 0,
    transform: getTransformStartProp(placement),
  })

  useEffect(() => {
    const transform = "translate(0, 0)"
    setStyles((prevStyles) => ({ ...prevStyles, opacity: 1, transform }))
  }, [])

  const handleCloseDrawer = () => {
    Promise.resolve()
      .then(() => {
        return new Promise<void>((resolve) => {
          const transform = getTransformStartProp(placement)
          setStyles({ opacity: 0, transform })
          setTimeout(() => resolve(), 150)
        })
      })
      .then(() => onClose())
  }

  const { transform } = styles
  const positionProps = getPositionProps(placement, size)

  return createPortal(
    <div
      className="backdrop-blur-[2px] transition-[opacity] overflow-y-auto absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.25)]"
      style={{ opacity: styles.opacity }}
      onClick={handleCloseDrawer}
    >
      <div
        className="transition-transform absolute flex flex-col bg-white"
        style={{ ...positionProps, transform }}
        onClick={(event) => event.stopPropagation()}
      >
        <header
          className={`text-white basis-[50px] flex-shrink-0 px-[10px] bg-[#2c5c97] flex items-center gap-[10px] ${
            placement === "right"
              ? "justify-between flex-row-reverse"
              : "justify-start flex-row"
          }`}
        >
          <button
            className="p-1.5 rounded bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)]"
            onClick={handleCloseDrawer}
          >
            <VscChromeClose className="w-5 h-5" />
          </button>
          <h1 className="drawer-title text-current text-lg font-bold">
            {title ? title : "lorem314.io"}
          </h1>
        </header>
        <div className="flex-grow-1 overflow-y-auto ">
          {React.cloneElement(
            children as React.ReactElement<{ onCloseDrawer: () => void }>,
            { onCloseDrawer: handleCloseDrawer }
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export const DrawerHead = ({
  children,
  onCloseDrawer,
}: {
  children: ReactNode
  onCloseDrawer?: () => void
}) => {
  return (
    <div className="p-[10px]">
      {React.cloneElement(
        children as React.ReactElement<{ onCloseDrawer: () => void }>,
        { onCloseDrawer }
      )}
    </div>
  )
}

function getPositionProps(placement: Placement, size: number) {
  switch (placement) {
    case "top":
    case "bottom":
      return { left: 0, right: 0, [placement]: 0, height: `${size}px` }
    case "left":
    case "right":
      return { top: 0, bottom: 0, [placement]: 0, width: `${size}px` }
    default:
      return { top: 0, bottom: 0, left: 0, width: `${size}px` }
  }
}

function getTransformStartProp(placement: Placement) {
  switch (placement) {
    case "top":
      return "translate(0, -100%)"
    case "right":
      return "translate(100%, 0)"
    case "bottom":
      return "translate(0, 100%)"
    case "left":
      return "translate(-100%, 0)"
    default:
      return "translate(-100%, 0)"
  }
}
