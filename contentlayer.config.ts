import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { remarkCodeHike } from "codehike/mdx"

import computeMdxMeta from "./src/utils/computeMdxMeta"

const Blog = defineDocumentType(() => ({
  name: "Blog",
  contentType: "mdx",
  filePathPattern: `blogs/**/index.mdx`,
  fields: {
    title: { type: "string", required: true, default: "博客标题" },
    tags: { type: "list", of: { type: "string" }, default: [] },
    date: { type: "date", required: true, default: "2000-01-01" },
  },
  computedFields: {
    meta: {
      type: "json",
      resolve: async (doc) => {
        return computeMdxMeta(doc.body.raw)
      },
    },
  },
}))

const BookCover = defineDocumentType(() => ({
  name: "BookCover",
  contentType: "data",
  filePathPattern: "books/**/index.json",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    cover: { type: "string", required: true },
    isbn: { type: "string", required: true },
  },
}))

const BookChapter = defineDocumentType(() => ({
  name: "BookChapter",
  contentType: "mdx",
  filePathPattern: "books/**/**/index.mdx",
  fields: {
    title: { type: "string", required: true },
    chapter: { type: "string", required: true },
    isbn: { type: "string", required: true },
  },
  computedFields: {
    meta: {
      type: "json",
      resolve: async (doc) => {
        return computeMdxMeta(doc.body.raw)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "published",
  documentTypes: [Blog, BookCover, BookChapter],
  mdx: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          components: { code: "CodeHikePre" },
          syntaxHighlighting: { theme: "github-dark" },
        },
      ],
    ],
  },
})
