import React, { ReactNode } from "react"

export const Code = ({ children }: { children: ReactNode }) => (
  <code className="text-neutral-950 bg-neutral-200 px-1 py-0.5 mx-0.5 rounded">
    {children}
  </code>
)
