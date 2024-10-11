import React, { isValidElement, ReactNode } from "react"
import { RiHashtag } from "react-icons/ri"

import { H2, H3, H4, H5, H6 } from "./headings"

const h: {
  [key: string]: ({
    children,
    id,
    className,
  }: {
    children: ReactNode
    id: string
    className: string
  }) => React.JSX.Element
} = { H2, H3, H4, H5, H6 }

const Section = ({
  title,
  level = 2,
  children,
}: {
  title: string
  level: number
  children: ReactNode
}) => {
  const H = h[`H${level < 6 ? level : 6}`]
  // const hashtagLink = encodeURIComponent(title)

  return (
    <section>
      <H id={title} className="font-bold group">
        <a
          className="text-inherit relative before:content-['#'] before:absolute before:translate-x-[-125%] before:opacity-0 hover:before:opacity-100 group-target:before:opacity-100"
          href={`#${title}`}
        >
          {title}
        </a>
      </H>

      {React.Children.toArray(children).map((child, index) => {
        if (isValidElement(child)) {
          const displayName = (child.type as React.FC).displayName
          if (typeof child.type === "function" && displayName === "Section") {
            const { props } = child
            const key = `Section-${level}-${index}`
            return <Section {...props} key={key} level={level + 1} />
          } else {
            return child
          }
        } else return child
      })}
    </section>
  )
}

Section.displayName = "Section"

export default Section
