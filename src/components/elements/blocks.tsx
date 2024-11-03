import React, { ReactNode } from "react"
import type { DetailedHTMLProps, BlockquoteHTMLAttributes } from "react"

export const P = ({ children }: { children: ReactNode }) => (
  <p className="my-4">{children}</p>
)

export const Blockquote = (
  props: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>
) => (
  <blockquote className="border-l-4 border-[#e4e4e7] dark:border-[#1a3478] px-5">
    {props.children}
  </blockquote>
)
