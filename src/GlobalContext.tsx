import { createContext } from "react"

const GlobalContext = createContext<{
  test: string
  hasRightDrawer: boolean | null
  isRightDrawerOpen: boolean | null
  handleRightDrawer: { open: () => void; close: () => void }
  preferredTheme: string
  setPreferredTheme: (arg0: string) => void
  isLeftDrawerAlwaysCollapsed: boolean
  setIsLeftDrawerAlwaysCollapsed: (arg0: boolean) => void
  isRightDrawerAlwaysCollapsed: boolean
  setIsRightDrawerAlwaysCollapsed: (arg0: boolean) => void
}>({
  test: "ok",
  hasRightDrawer: null,
  isRightDrawerOpen: null,
  handleRightDrawer: { open: () => {}, close: () => {} },
  preferredTheme: "system",
  setPreferredTheme: () => {},
  isLeftDrawerAlwaysCollapsed: false,
  setIsLeftDrawerAlwaysCollapsed: () => {},
  isRightDrawerAlwaysCollapsed: false,
  setIsRightDrawerAlwaysCollapsed: () => {},
})

export default GlobalContext
