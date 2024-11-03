import Link from "next/link"
import CodeHikePre from "./CodeHikePre"
import { Code } from "./inlines"
import { Blockquote } from "./blocks"
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type AnchorHTMLAttributes,
} from "react"

const components = {
  CodeHikePre,
  blockquote: Blockquote,
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => (
    <Link href={props.href || "/"} target="_blank" rel="noopener noreferrer">
      {props.children}
    </Link>
  ),
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => <p className="my-4 leading-7 tracking-[0.25px]">{props.children}</p>,
  code: Code,
}

export default components
