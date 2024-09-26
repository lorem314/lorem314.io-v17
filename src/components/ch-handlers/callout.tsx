import type { AnnotationHandler, RawCode } from "codehike/code"

import { InlineAnnotation } from "codehike/code"

const callout: AnnotationHandler = {
  name: "callout",
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    }
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${column + 4}ch` }}
          className="w-fit border border-[#d1d5db] bg-[#f8fafc] rounded px-2 relative ml-[18px] mt-1 whitespace-break-spaces select-none"
        >
          <div
            style={{ left: `${column}ch` }}
            className="absolute border-l border-t border-[#d1d5db] w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px] bg-[#f8fafc]"
          />
          {annotation.query}
        </div>
      </>
    )
  },
}

export default callout
