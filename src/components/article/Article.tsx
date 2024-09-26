import React, { ReactElement, ReactNode } from "react"
import { MDX } from "contentlayer/core"

import Actions from "@/components/article/Actions"
import Body from "@/components/article/Body"
import LinkedToc from "./LinkedToc"

const Article = ({
  header,
  body,
  footer,
}: {
  header?: ReactElement
  body: MDX
  footer?: ReactElement
}) => {
  return (
    <div className="max-w-[72rem] mx-auto my-8 grid grid-cols-[2.5rem_minmax(0,_auto)_minmax(0,20rem)] gap-[10px]">
      <div className="">
        <Actions />
      </div>

      <div>
        {header ? header : null}
        <Body body={body} />
        {footer ? footer : null}
      </div>

      <div className="">
        <LinkedToc />
      </div>
    </div>
  )
}

export default Article
