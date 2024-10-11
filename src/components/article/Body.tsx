import React from "react"
import { MDX } from "contentlayer/core"
import { useMDXComponent } from "next-contentlayer/hooks"

import CodeHikePre from "../elements/CodeHikePre"
import { P } from "../elements/blocks"
import { Code } from "../elements/inlines"

const Body = ({ body }: { body: MDX }) => {
  const MDXContent = useMDXComponent(body.code)

  return (
    <div className="page-content px-8 py-6">
      <MDXContent
        components={{
          CodeHikePre,
          code: (props) => <Code>{props.children}</Code>,
          p: (props) => <P>{props.children}</P>,
          blockquote: (props) => (
            <blockquote className="text-red-400">{props.children}</blockquote>
          ),
        }}
      />
    </div>
  )
}

export default Body
