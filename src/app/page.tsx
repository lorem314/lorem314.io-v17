import { Metadata } from "next"

import Figure from "@/components/elements/Figure"
import Table, { Thead, Tbody, Tr } from "@/components/elements/Table"
import { Tip, Note, Warning, Border } from "@/components/elements/oreilly"

export default function Home() {
  return (
    <div className="my-8 mx-auto p-2 rounded shadow bg-white max-w-[32rem]">
      <Figure src="/books/分布式NodeJS/cover.jpg" title="分布式 NodeJS 封面" />
      <Table title="Random TABLE">
        <Thead ths={["Col.1", "Col.2", "Acommand"]} />
        <Tbody>
          <Tr th={"total"} tds={["data", "d2"]} />
        </Tbody>
      </Table>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis
        fugit perspiciatis corrupti maiores eos consequatur corporis laborum
        obcaecati magnam quia in voluptatibus esse voluptate, dolore, sint
        cumque ullam, aliquam modi maxime ipsam. Totam, quos vel et amet
        dignissimos, doloribus, obcaecati velit alias quia exercitationem optio
        sapiente rem nemo odit tempora ad iste quisquam quibusdam provident?
        Molestiae voluptates totam necessitatibus ab dicta eligendi odit
        accusantium! Aspernatur iste debitis enim quod eos sed maxime doloremque
        consequuntur quos culpa id laborum nobis quo non officia aperiam quas,
        excepturi quisquam laboriosam saepe nisi exercitationem repellendus!
        Quis repellendus iste incidunt laborum, deserunt delectus quibusdam!
      </p>
      <Note>
        <p>
          This element signifies a tip or suggestion.This element signifies a
          tip or suggestion. This element signifies a tip or suggestion. This
          element signifies a tip or suggestion. This element signifies a tip or
          suggestion.
        </p>
      </Note>
      <Tip>
        <p>
          This element signifies a general note.This element signifies a general
          note. This element signifies a general note. This element signifies a
          general note. This element signifies a general note.
        </p>
      </Tip>
      <Warning>
        <p>
          This element indicates a warning or caution.This element indicates a
          warning or caution. This element indicates a warning or caution. This
          element indicates a warning or caution. This element indicates a
          warning or caution.
        </p>
      </Warning>
      <Border title="Surprise Interview Question">
        <p>
          This element indicates a warning or caution.This element indicates a
          warning or caution. This element indicates a warning or caution. This
          element indicates a warning or caution. This element indicates a
          warning or caution.
        </p>
      </Border>
    </div>
  )
}

export const metadata: Metadata = {
  title: "主页 | lorem314.io-v17",
}
