import { InlineAnnotation } from "codehike/code"
import type { AnnotationHandler, RawCode } from "codehike/code"
import { Pre, highlight } from "codehike/code"

import callout from "../ch-handlers/callout"
import lineNumbers from "../ch-handlers/line-numbers"

async function CodeHikePre({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-light")

  console.log("[CodeHikePre] highlighted.meta:", highlighted.meta)
  const meta = parseMeta(highlighted.meta)
  console.log("[CodeHikePre] parsed meta     :", meta)

  return (
    <div className="border border-[rgb(209, 213, 219)]">
      <div className="border-b border-[rgb(209, 213, 219)] px-3 py-2 text-sm bg-[#f8fafc]">
        {highlighted.meta || "代码标题"}
      </div>
      <Pre
        className="py-2 overflow-auto"
        code={highlighted}
        handlers={[callout, lineNumbers]}
      />
    </div>
  )
}

export default CodeHikePre

const parseMeta = (rawMeta: string) => {
  const iterator = rawMeta.matchAll(/([a-zA-Z]+)(?:="(.+?)")?/g)
  const meta: { [key: string]: string | number | boolean } = {}

  for (const match of iterator) {
    const [_, key, value] = match
    if (value === undefined) meta[key] = true
    else meta[key] = value
  }
  return meta
}

// ([a-zA-Z]+)(?:(?:="(.+?)")|(?:=([0-9]+)))?
// title="react" lineNumber image="sdf" count=12
