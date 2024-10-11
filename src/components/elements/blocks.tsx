import React, { ReactNode } from "react"

export const P = ({ children }: { children: ReactNode }) => (
  <p className="my-4">{children}</p>
)
