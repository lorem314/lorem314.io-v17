"use client"
import React from "react"
import { usePathname } from "next/navigation"
import { AppProgressBar } from "next-nprogress-bar"

import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import Sidebar from "@/components/layouts/Sidebar"
import Drawer from "@/components/ui/Drawer"

import useDrawer from "@/hooks/useDrawer"
import useClient from "@/hooks/useClient"

import GlobalContext from "@/GlobalContext"

import { RiMenu2Fill } from "react-icons/ri"
import { VscListTree } from "react-icons/vsc"
import { AiOutlineTags } from "react-icons/ai"

import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isLeftDrawerAlwaysCollapsed = false
  const isRightDrawerAlwaysCollapsed = false

  const isClient = useClient()
  const pathname = usePathname()

  const {
    isCollapsed: isLeftDrawerCollapsed,
    isOpen: isLeftDrawerOpen,
    handler: handleLeftDrawer,
  } = useDrawer({
    isAlwaysCollapsed: isLeftDrawerAlwaysCollapsed,
    breakPoint: 1280,
  })

  const rightDrawerProps = getRightDrawerProps(pathname)
  const {
    isCollapsed: isRightDrawerCollapsed,
    isOpen: isRightDrawerOpen,
    handler: handleRightDrawer,
  } = useDrawer({
    isAlwaysCollapsed: isRightDrawerAlwaysCollapsed,
    breakPoint: rightDrawerProps.bp,
  })

  const hasLeftDrawer = isLeftDrawerAlwaysCollapsed || isLeftDrawerCollapsed
  const hasRightDrawer =
    (isRightDrawerAlwaysCollapsed || isRightDrawerCollapsed) &&
    rightDrawerProps.icon !== null

  return (
    <html lang="ch">
      <body className="w-full h-full">
        {/*  */}

        <AppProgressBar
          height="4px"
          color="#97672C"
          options={{ showSpinner: false }}
          shallowRouting
        />

        {isClient ? (
          <>
            <Header
              hasLeftDrawer={hasLeftDrawer}
              handleLeftDrawer={handleLeftDrawer}
              hasRightDrawer={hasRightDrawer}
              handleRightDrawer={handleRightDrawer}
              rightDrawerProps={rightDrawerProps}
            />

            {hasLeftDrawer ? (
              <Drawer
                isOpen={isLeftDrawerOpen}
                size={320}
                onClose={handleLeftDrawer.close}
              >
                <Sidebar />
              </Drawer>
            ) : (
              <aside className="absolute top-[50px] bottom-0 left-0 w-[320px]">
                <Sidebar />
              </aside>
            )}

            <main className="overflow-y-auto px-[10px] absolute top-[50px] bottom-0 right-0 left-0 xl:left-[320px] bg-gray-200">
              <GlobalContext.Provider
                value={{
                  test: "233333",
                  hasRightDrawer,
                  isRightDrawerOpen,
                  handleRightDrawer,
                }}
              >
                {children}
              </GlobalContext.Provider>
              <Footer />
            </main>
          </>
        ) : null}

        {/*  */}
      </body>
    </html>
  )
}

const getRightDrawerProps = (pathname: string) => {
  const splitted = pathname.split("/")
  const length = splitted.length

  if (length === 2 && splitted[1] === "blogs") {
    // /blogs
    return { bp: 1024, icon: AiOutlineTags }
  } else if (length === 2 && splitted[1] === "books") {
    // /books
    return { bp: 1024, icon: RiMenu2Fill }
  } else if (length === 3 && splitted[1] === "blogs") {
    // /blogs/[blog-title]
    return { bp: 1024, icon: VscListTree }
  } else if (length === 4 && splitted[1] === "books") {
    // /books/[book-title]/[book-chapter]
    return { bp: 1024, icon: VscListTree }
  } else {
    return { bp: 0, icon: null }
  }
}
