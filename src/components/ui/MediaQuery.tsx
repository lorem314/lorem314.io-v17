"use client"
import React, { useState, useEffect, useLayoutEffect } from "react"

const MediaQuery = ({
  query = "",
  children = [null, null],
}: {
  query: string
  children: React.ReactNode[]
}) => {
  const [isMatch, setIsMatch] = useState<boolean>(true)

  useLayoutEffect(() => {
    if (window.matchMedia(query).matches) setIsMatch(true)
    else setIsMatch(false)
  }, [query])

  useEffect(() => {
    const handleResizeWindow = () => {
      if (window.matchMedia(query).matches) setIsMatch(true)
      else setIsMatch(false)
    }
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [query])

  return isMatch ? children[0] : children[1]
}

export default MediaQuery
