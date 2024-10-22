"use client"
import React, { ReactElement, useContext } from "react"

import Actions from "@/components/article/Actions"
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
  title,
  toc,
}: {
  header?: ReactElement
  renderedBody: JSX.Element
  footer?: ReactElement
  title: string
  toc: { items: Item[] }
}) => {
  const { hasRightDrawer, isRightDrawerOpen, handleRightDrawer } =
    useContext(GlobalContext)

  return (
    <div className="max-w-[72rem] mx-auto my-8 grid grid-cols-[2.5rem_minmax(0,_auto)_minmax(0,20rem)] gap-[10px]">
      <aside>
        <Actions />
      </aside>

      <article className="col-start-2 col-end-4 lg:col-end-3">
        {header ? header : null}

        <div className="text-LightContent-1 dark:text-DarkContent-1 bg-LightPageContentBg dark:bg-DarkPageContentBg px-8 py-4">
          {renderedBody}
        </div>

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
            <LinkedToc className="" title={title} toc={toc} />
          </DrawerHead>
        </Drawer>
      ) : (
        <div>
          <LinkedToc
            className="PageContent sticky top-[10px]"
            title={title}
            toc={toc}
          />
        </div>
      )}
    </div>
  )
}

export default Article
