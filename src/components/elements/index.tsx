import Link from "next/link"
import CodeHikePre from "./CodeHikePre"
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type AnchorHTMLAttributes,
  type BlockquoteHTMLAttributes,
} from "react"

const components = {
  CodeHikePre,
  blockquote: (
    props: DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>
  ) => (
    <blockquote className="my-4 border-l-4 border-neutral-400 px-4 bg-slate-200 dark:bg-slate-700 [&>p]:py-2">
      {props.children}
    </blockquote>
  ),
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => <Link href={props.href || "/"}>{props.children}</Link>,
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => <p className="my-4 leading-7 tracking-[0.25px]">{props.children}</p>,
}

export default components
