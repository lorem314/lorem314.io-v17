import { Metadata } from "next"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

export const metadata: Metadata = {
  title: "书籍 | lorem314.io-v17",
}
