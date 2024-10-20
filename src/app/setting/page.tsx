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

      <div>
        <p className="text-LightContent-0 dark:text-DarkContent-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <p className="text-LightContent-1 dark:text-DarkContent-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <p className="text-LightContent-2 dark:text-DarkContent-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <p className="text-LightContent-3 dark:text-DarkContent-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div>
      {/* <div className="px-4 py-2 rounded text-black bg-white dark:text-white dark:bg-black">
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          obcaecati alias maxime eaque earum autem mollitia ducimus sunt
          molestias ut aperiam eligendi dignissimos excepturi quae perferendis
          ipsum repudiandae asperiores dicta, fuga nesciunt eos numquam
          provident atque expedita? Optio quis voluptates veritatis magnam
          itaque sit, aliquam sed earum ducimus voluptatem cumque commodi
          nostrum laudantium numquam sunt et beatae quisquam dolorum? Natus
          perferendis nisi, consequatur quos nulla consequuntur magni numquam
          doloribus impedit illo aspernatur laboriosam asperiores maiores soluta
          alias! Ullam deleniti quae, eligendi autem nemo animi ratione dicta
          id. Eum, magni voluptatibus iusto, quia, doloremque facere non harum
          odio nesciunt quidem ut!
        </p>
      </div> */}
    </div>
  )
}

export default SettingPage
