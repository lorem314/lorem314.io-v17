"use client"
import React, { ReactElement, useContext } from "react"
import { MDX } from "contentlayer/core"

import Actions from "@/components/article/Actions"
import Body from "@/components/article/Body"
import LinkedToc from "./LinkedToc"

import Drawer, { DrawerHead } from "@/components/ui/Drawer"
import GlobalContext from "@/GlobalContext"

type Item = {
  title: string
  items: Item[]
}

const Article = ({
  header,
  renderedBody,
  footer,
  toc,
}: {
  header?: ReactElement
  renderedBody: JSX.Element
  footer?: ReactElement
  toc: { items: Item[] }
}) => {
  const { hasRightDrawer, isRightDrawerOpen, handleRightDrawer } =
    useContext(GlobalContext)

  return (
    <div className="max-w-[72rem] mx-auto my-8 grid grid-cols-[2.5rem_minmax(0,_auto)_minmax(0,20rem)] gap-[10px]">
      <aside className="">
        <Actions />
      </aside>

      <article className="col-start-2 col-end-4 lg:col-end-3">
        {header ? header : null}

        <div className="bg-white px-8 py-4">{renderedBody}</div>

        {footer ? footer : null}
      </article>

      {hasRightDrawer ? (
        <Drawer
          isOpen={!!isRightDrawerOpen}
          placement="right"
          size={320}
          onClose={handleRightDrawer.close}
          title="目录"
        >
          <DrawerHead>
            <LinkedToc className="" toc={toc} />
          </DrawerHead>
        </Drawer>
      ) : (
        <div className="">
          <LinkedToc className="page-content sticky top-[10px]" toc={toc} />
        </div>
      )}
    </div>
  )
}

export default Article
