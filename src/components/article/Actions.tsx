import React, { useState, useEffect, useCallback } from "react"
// import { useRouter } from "next/navigation"

// import { IoArrowBackSharp } from "react-icons/io5"
import { BiSolidArrowToTop } from "react-icons/bi"
import { MdFullscreen, MdFullscreenExit } from "react-icons/md"

const Actions = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  // const router = useRouter()

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) setIsFullscreen(true)
      else setIsFullscreen(false)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const openFullscreen = useCallback(() => {
    const nodeMainContent = document.getElementById("page-container")
    if (nodeMainContent && nodeMainContent.requestFullscreen) {
      nodeMainContent.requestFullscreen()
    } else {
      alert("浏览器不支持全屏")
    }
  }, [])

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  const toTop = useCallback(() => {
    document.getElementById("page-container")?.scrollTo(0, 0)
  }, [])

  // const goBack = useCallback(() => {
  //   router.back()
  // }, [router])

  return (
    <ul className=" flex flex-col items-center gap-[10px] sticky top-[10px]">
      {/* <li className="flex justify-center items-center">
        <button
          className="PageContent hover:text-blue-800"
          // onClick={goBack}
        >
          <IoArrowBackSharp className="w-5 h-5" />
        </button>
      </li> */}
      <li className="flex justify-center items-center">
        <button className="PageContent hover:text-blue-800" onClick={toTop}>
          <BiSolidArrowToTop className="w-5 h-5" />
        </button>
      </li>
      {isFullscreen ? (
        <li className="flex justify-center items-center">
          <button
            className="PageContent hover:text-blue-800"
            onClick={exitFullscreen}
          >
            <MdFullscreenExit className="w-5 h-5" />
          </button>
        </li>
      ) : (
        <li className="flex justify-center items-center">
          <button
            className="PageContent hover:text-blue-800"
            onClick={openFullscreen}
          >
            <MdFullscreen className="w-5 h-5" />
          </button>
        </li>
      )}
    </ul>
  )
}

export default Actions
