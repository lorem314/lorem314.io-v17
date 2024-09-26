"use client"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
import { AppProgressBar } from "next-nprogress-bar"

import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import Sidebar from "@/components/layouts/Sidebar"
// import MediaQuery from "@/components/ui/MediaQuery"
import Drawer from "@/components/ui/Drawer"

import useDrawer from "@/hooks/useDrawer"
import useClient from "@/hooks/useClient"

// import { RiMenu2Fill } from "react-icons/ri"

import "./globals.css"
import { useEffect } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isLeftDrawerAlwaysCollapsed = false
  // const isRightDrawerAlwaysCollapsed = false
  const isClient = useClient()
  // const router = useRouter()

  const {
    isCollapsed: isLeftDrawerCollapsed,
    isOpen: isLeftDrawerOpen,
    handler: handleLeftDrawer,
  } = useDrawer({
    isAlwaysCollapsed: isLeftDrawerAlwaysCollapsed,
    breakPoint: 1280,
  })

  // useEffect(() => {
  //   router.events.on("routeChangeStart", (url, { shallow }) => {
  //     console.log(`routing to ${url}`, `is shallow routing: ${shallow}`)
  //   })
  // }, [])

  const hasLeftDrawer = isLeftDrawerAlwaysCollapsed || isLeftDrawerCollapsed

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
              {children}
              <Footer />
            </main>
          </>
        ) : null}

        {/*  */}
      </body>
    </html>
  )
}
