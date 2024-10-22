"use client"
import GlobalContext from "@/GlobalContext"
import React, { useContext } from "react"

const SettingPage = () => {
  const {
    preferredTheme,
    setPreferredTheme,
    isLeftDrawerAlwaysCollapsed,
    setIsLeftDrawerAlwaysCollapsed,
  } = useContext(GlobalContext)

  return (
    <div className="PageContent mx-auto my-8 max-w-[32rem]">
      <h2 className="ContentTitle">设置</h2>

      <label className="flex items-center gap-1" htmlFor="preferred-theme">
        主题
        <select
          id="preferred-theme"
          value={preferredTheme}
          onChange={(event) => {
            console.log("event", event.target.value)
            setPreferredTheme(event.target.value)
          }}
        >
          <option value="system">自动</option>
          <option value="light">白天</option>
          <option value="dark">黑夜</option>
        </select>
      </label>

      <label
        className="my-2 flex items-center gap-1"
        htmlFor="is-left-drawer-always-collapsed"
      >
        <input
          type="checkbox"
          id="is-left-drawer-always-collapsed"
          checked={isLeftDrawerAlwaysCollapsed}
          onChange={(event) => {
            setIsLeftDrawerAlwaysCollapsed(event.target.checked)
          }}
        />
        总是折叠左侧抽屉
      </label>
    </div>
  )
}

export default SettingPage
