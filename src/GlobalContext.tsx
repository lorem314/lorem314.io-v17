import { createContext } from "react"

const GlobalContext = createContext<{
  test: string
  hasRightDrawer: boolean | null
  isRightDrawerOpen: boolean | null
  handleRightDrawer: { open: () => void; close: () => void }
}>({
  test: "ok",
  hasRightDrawer: null,
  isRightDrawerOpen: null,
  handleRightDrawer: { open: () => {}, close: () => {} },
})

export default GlobalContext
