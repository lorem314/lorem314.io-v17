import React, { ReactNode } from "react"

const Table = ({
  id,
  title,
  children,
}: {
  id?: string
  title?: string
  children: ReactNode
}) => {
  return (
    <table
      className="mx-auto my-4"
      id={id ? `表格${id}${title || ""}` : undefined}
    >
      {title ? (
        <caption className="text-neutral-500">
          {id ? `表格 ${id} ` : ""}
          {title}
        </caption>
      ) : null}
      {children}
    </table>
  )
}

export default Table

type Td = string | number
type Th = Td

export const Thead = ({ ths }: { ths: Th[] }) => {
  return (
    <thead>
      <tr>
        {ths.map((th, index) => (
          <th key={index} scope="col">
            {th}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export const Tbody = ({ children }: { children: ReactNode }) => {
  return <tbody>{children}</tbody>
}

export const Tr = ({ th, tds }: { th?: Td; tds: Td[] }) => {
  return (
    <tr>
      {th ? <th scope="row">{th}</th> : null}
      {tds.map((td, index) => (
        <td key={index}>{td}</td>
      ))}
    </tr>
  )
}
