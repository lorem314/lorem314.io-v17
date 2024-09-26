import React, { ReactNode } from "react"

type HeadingProps = {
  children: ReactNode
}

export const H1 = ({ children }: HeadingProps) => <h1>{children}</h1>

export const H2 = ({ children }: HeadingProps) => {
  const id = children ? parseId(children.toString()) : undefined
  return (
    <h2 id={id} className="text-3xl font-bold target:text-red-500">
      {children}
    </h2>
  )
}

export const H3 = ({ children }: HeadingProps) => (
  <h3 className="text-2xl">{children}</h3>
)

export const H4 = ({ children }: HeadingProps) => (
  <h4 className="text-xl">{children}</h4>
)

export const H5 = ({ children }: HeadingProps) => (
  <h5 className="text-lg">{children}</h5>
)

export const H6 = ({ children }: HeadingProps) => (
  <h6 className="text-base">{children}</h6>
)

const parseId = (text: string) => {
  return ""
}
