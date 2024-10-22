import React, { ReactNode } from "react"

type HeadingProps = {
  children: ReactNode
  className?: string
  id?: string
}

export const H1 = ({ children }: HeadingProps) => (
  <h1 className="text-[1.75rem] font-bold">{children}</h1>
)

export const H2 = ({ children, id, className }: HeadingProps) => (
  <h2 id={id} className={`${className} text-[1.625rem] font-bold mt-8 mb-4`}>
    {children}
  </h2>
)

export const H3 = ({ children, id, className }: HeadingProps) => (
  <h3 id={id} className={`${className} text-[1.5rem] font-bold mt-7 mb-4`}>
    {children}
  </h3>
)

export const H4 = ({ children, id, className }: HeadingProps) => (
  <h4 id={id} className={`${className} text-[1.375rem] font-bold mt-6 mb-4`}>
    {children}
  </h4>
)

export const H5 = ({ children, id, className }: HeadingProps) => (
  <h5 id={id} className={`${className} text-[1.25rem] font-bold mt-5 mb-4`}>
    {children}
  </h5>
)

export const H6 = ({ children, id, className }: HeadingProps) => (
  <h6 id={id} className={`${className} text-base font-bold mt-4 mb-4`}>
    {children}
  </h6>
)
