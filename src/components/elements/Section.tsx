import React, { isValidElement, ReactNode } from "react"

const Section = ({
  title,
  level = 2,
  children,
}: {
  title: string
  level: number
  children: ReactNode
}) => {
  // console.log(`${title}: ${level}`)

  return (
    <section className="">
      <div className="font-bold">level-{level}</div>

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
