import React from "react"
import { MDX } from "contentlayer/core"
import { useMDXComponent } from "next-contentlayer/hooks"

import CodeHikePre from "../elements/CodeHikePre"
import { H2, H3, H4, H5, H6 } from "../elements/headings"

const Body = ({ body }: { body: MDX }) => {
  const MDXContent = useMDXComponent(body.code)

  return (
    <div className="page-content">
      <MDXContent
        components={{
          h2: (props) => <H2>{props.children}</H2>,
          h3: (props) => <H3>{props.children}</H3>,
          h4: (props) => <H4>{props.children}</H4>,
          h5: (props) => <H5>{props.children}</H5>,
          h6: (props) => <H6>{props.children}</H6>,
          Code: CodeHikePre,
          code: (props) => (
            <code className="text-red-500">{props.children}</code>
          ),
          p: (props) => <p className="">{props.children}</p>,
        }}
      />
    </div>
  )
}

export default Body
