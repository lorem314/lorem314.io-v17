import type { RawCode } from "codehike/code"
import { Pre, highlight } from "codehike/code"

import callout from "../ch-handlers/callout"
import lineNumbers from "../ch-handlers/line-numbers"

async function CodeHikePre({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark")
  const meta = parseMeta(highlighted.meta)

  const handlers = [callout]

  if (!meta.noLineNumber) {
    handlers.push(lineNumbers)
  }

  return (
    <div className="my-4">
      {meta.title ? (
        <div className="rounded-t px-4 py-2 text-sm text-[#cbd5e1] bg-[rgba(9,9,11,0.85)]">
          {meta.title}
        </div>
      ) : null}
      <Pre
        className={`${
          meta.noLineNumber ? "px-4" : "px-2"
        } py-2 overflow-auto bg-[rgba(9,9,11,0.8)] ${
          meta.title ? "rounded-b" : "rounded"
        }`}
        code={highlighted}
        handlers={handlers}
      />
    </div>
  )
}

export default CodeHikePre

const parseMeta = (rawMeta: string) => {
  const iterator = rawMeta.matchAll(/([a-zA-Z]+)(?:="(.+?)")?/g)
  const meta: { [key: string]: string | number | boolean } = {}

  for (const match of iterator) {
    const key = match[1]
    const value = match[2]
    if (value === undefined) meta[key] = true
    else meta[key] = value
  }
  return meta
}

// ([a-zA-Z]+)(?:(?:="(.+?)")|(?:=([0-9]+)))?
// title="react" lineNumber image="sdf" count=12
