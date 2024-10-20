import React from "react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="my-8 mx-auto p-4 rounded shadow bg-white max-w-[56rem]">
      {/*  */}

      <div className="flex justify-between items-center">
        <div className="text-2xl">
          <div className="mb-2">姓名：党子寅</div>
          <div className="font-bold">期望职位：React 前端</div>
        </div>
        <div>
          <div>手机：13810104237</div>
          <div>邮箱：dzy314225@126.com</div>
          <div>地址：北京-朝阳-常营（6号线）</div>
          <div>
            Git：
            <a
              href="https://github.com/lorem314"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/lorem314
            </a>
          </div>
        </div>
      </div>

      <section className="my-2">
        <h3 className="ContentTitle">个人简介</h3>
        <p className="my-1">
          毕业后本考虑去日本留学，花了一段时间学习日语、巩固英语，备考等级证书，并在
          Coursera 上完成了
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/UV4T76MU9Q29"
            target="_blank"
            rel="noopener noreferrer"
          >
            深度学习
          </a>
          等机器学习相关课程，撰写研究计划书，研究方向为：基于机器学习的推荐系统。
        </p>
        <p className="my-1">
          之后遇到疫情，没能按照计划留学，也没打算在国内考研，故准备就职。在通过
          youtube、各种书籍和官网等途径又学习了一段时间 React
          相关技术、并开发了一些个人项目，丰富了简历内容后，开始投放简历。
        </p>
        <p className="my-1">
          擅长 React 前端开发，一直有关注与其技术栈相关的最新发展动向。熟悉
          Redux 和 MobX 等状态管理库；能使用 webpack 和 babel 构建 React
          开发环境；也在 Node 上用 express
          写过后端服务器，打算在后期转型为全栈开发。目前也在学习 Typescript 和
          Electron。
        </p>
        <p className="my-1">
          熟练使用 Git、阅读英文文档和使用 Google
          查找问题的解决方案。爱好模拟沙盒建造类游戏、美剧和电子板绘。
        </p>
        <p className="my-1">
          对自我的评价是：为人理性，善于思考，学习能力强，乐于尝试新的技术。
        </p>
      </section>

      <section className="my-4">
        <h3 className="ContentTitle">教育背景</h3>
        <div className="flex justify-between">
          <div>北京工业大学（211-四年制-本科）</div>
          <div>计算机科学与技术</div>
          <div>2014年 - 2018年</div>
        </div>
        <p>
          大一进入网络部，管理校园网论坛；大二上学期末随全班同学前往法国进行为期一个月的学习生活体验；大三参加蓝桥杯编程比赛并荣获二等奖，帮助老师修改历届学生的
          PHP 网页项目；大四毕业实习编写课程表微信小程序。
        </p>
      </section>

      <section className="my-4">
        <h3 className="ContentTitle">个人项目</h3>
        <div className="flex justify-between font-bold">
          <div>lorem314.io</div>
          <div>个人博客网站</div>
        </div>
        <p>
          简介：个人博客网站。用于记录翻译的文章、书籍和开发过程中遇到过的问题的总结。第
          8 和 12 版使用 Gatsby 开发，第 17 版使用 NextJS 14 开发，均在 Vercel
          上部署。（在线预览需要VPN）
        </p>
        <ul className="pl-8 list-disc">
          <li>采用响应式设计和自定义 React 组件、Hooks</li>
          <li>
            在博客文章页面用Intersection Observer
            API实现与出现在视图窗口中对应的目录中的标题的高亮显示
          </li>
          <li>可切换白天黑夜颜色模式</li>
        </ul>
        <div className="my-1">
          所有版本的源码均可在我的{" "}
          <a
            href="https://github.com/lorem314?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git Repositories
          </a>{" "}
          页面找到
        </div>
        <div>
          第 8 版：
          <a
            target="_blank"
            href="https://main--lighthearted-pothos-11005d.netlify.app/"
          >
            https://main--lighthearted-pothos-11005d.netlify.app/
          </a>
        </div>
        <div>
          第 12 版：
          <a
            target="_blank"
            href="https://main--lighthearted-pothos-11005d.netlify.app/"
          >
            https://lorem314-io-v12.vercel.app/
          </a>
        </div>
        <div>
          第 17 版（开发中）：
          <a target="_blank" href="https://lorem314-io-v17.vercel.app">
            https://lorem314-io-v17.vercel.app
          </a>
        </div>
        <p className="mt-1">
          设计历程：在最初学习 React 时，偶然间找到了作者之一的{" "}
          <a
            href="https://danabra.mov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan Abramov
          </a>{" "}
          的博客网站{" "}
          <a
            href="https://overreacted.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            overreacted.io
          </a>{" "}
          ，在稍作查找之后，得知该网站使用 Gatsby
          开发（可以从检查元素中看出，body 标签下有一个 id 为 __gatsby 的 div
          标签，最近重温该网站，发现其有可能换了开发框架），也打算开发一个个人博客网站，于是便开始了学习
          Gatsby 的路程。期间找了很多相关的资料，并跟随
          <a
            href="https://www.youtube.com/watch?v=kzWIUX3CpuI"
            target="_blank"
            rel="noopener noreferrer"
          >
            这个 Youtube 视频教程
          </a>
          写出了第一版的博客网站，使用的 gatsby 版本为{" "}
          <a
            href="https://github.com/lorem314/lorem314.io/blob/main/package.json#L35"
            target="_blank"
            rel="noopener noreferrer"
          >
            4.16.0
          </a>
          。第一版的页面设计非常简单（就如同现在 Dan
          的网站一样），只有主页、博客列表和博客文章共三个页面。之后开始逐步设计网站，参考了{" "}
          <a
            href="https://regex101.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            regex101
          </a>{" "}
          网站的布局，添加了左右抽屉和书籍、设定等页面，完成了第 8 版；之后觉得
          Gatsby 的代码高亮插件 gatsby-remark-prismjs 不太能满足特定需求，又参照
          <a
            href="https://annarossetti.com/articles/custom-code-blocks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            这篇文章
          </a>
          使用 prism-react-renderer 进行二次开发，并借此机会使用 gatsby{" "}
          <a
            href="https://github.com/lorem314/lorem314.io-v12/blob/main/package.json#L34"
            target="_blank"
            rel="noopener noreferrer"
          >
            5.13.3
          </a>
          ，完成第 12 版。之后在查找 React 源码解读资料时，找到了
          <a
            href="https://pomb.us/build-your-own-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            这篇文章
          </a>
          ，其不像传统的博客使用固定的代码块展示代码，而是使用整个页面，随着滚动条滚动，以淡入淡出的动画形式展示代码。经过查询，找到了{" "}
          <a
            href="https://codehike.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            code-hike
          </a>
          ，也正是该文章的作者开发的。code-hike 0.9.0 版本{" "}
          <a
            href="https://v0.codehike.org/docs/installation/gatsby"
            target="_blank"
            rel="noopener noreferrer"
          >
            支持
          </a>{" "}
          Gatsby，但没有在最新的 1.0.2 版本的文档中找到有关信息，但 1.0.2 版本
          <a
            href="https://codehike.org/docs#manual-installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            支持
          </a>{" "}
          NextJS，且最新版本还可以通过代码注释的方式自定义代码样式，于是决定使用
          NextJS 14 重新编写博客网站，也就是目前还在开发中的第 17 版（该网站）。
        </p>

        <div className="mt-4 flex justify-between font-bold">
          <div>MERN-Social</div>
          <div>社交网站</div>
        </div>
        <p>
          简介：使用 MongoDB、Express 和 React 在 Node 上开发的 MERN
          全栈社交应用网页程序。功能有：用户注册和登录，用户可以更改个人信息，用户可以相互关注、发布动态、上传视频和在动态、视频下评论、点赞。关注后的用户可相互发送信息。
        </p>
        <div>前端：</div>
        <ul className="pl-8 list-disc">
          <li>
            用{" "}
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-router
            </a>{" "}
            管理前端
            <a
              href="https://github.com/lorem314/mern-social-v9/blob/main/client/MainRouter.jsx#L81"
              target="_blank"
              rel="noopener noreferrer"
            >
              浏览器路由
            </a>
            。
          </li>
          <li>
            用{" "}
            <a
              href="https://styled-components.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              styled-components
            </a>{" "}
            编写
            <a
              href="https://github.com/lorem314/mern-project-v6/blob/main/client/user/User.jsx#L10"
              target="_blank"
              rel="noopener noreferrer"
            >
              样式
            </a>
            。
          </li>
          <li>
            用{" "}
            <a
              href="https://react-hook-form.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-hook-form
            </a>{" "}
            管理
            <a
              href="https://github.com/lorem314/mern-social-v9/blob/main/client/message/MessageForm.jsx#L13"
              target="_blank"
              rel="noopener noreferrer"
            >
              表单
            </a>
            状态。
          </li>
        </ul>
        <div>后端：</div>
        <ul className="pl-8 list-disc">
          <li>
            用{" "}
            <a
              href="https://mongoosejs.com/docs/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              mongoose
            </a>{" "}
            设计数据库中{" "}
            <a
              href="https://github.com/lorem314/mern-social-v9/tree/main/server/models"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schema Model
            </a>
            ，并与数据库交互。
          </li>
          <li>
            用{" "}
            <a
              href="https://expressjs.com/en/starter/installing.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              express
            </a>{" "}
            中的{" "}
            <a
              href="https://expressjs.com/en/guide/routing.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Router
            </a>{" "}
            实例定义后端 RESTful API{" "}
            <a
              href="https://github.com/lorem314/mern-social-v9/tree/main/server/routers"
              target="_blank"
              rel="noopener noreferrer"
            >
              路由
            </a>
            ，并向对应的 HTTP 方法函数中
            <a
              href="https://github.com/lorem314/mern-social-v9/blob/main/server/routers/user.router.js#L12"
              target="_blank"
              rel="noopener noreferrer"
            >
              传入中间件函数
            </a>
            ，处理前端的{" "}
            <a
              href="https://github.com/lorem314/mern-social-v9/blob/main/client/user/api-user.js#L50"
              target="_blank"
              rel="noopener noreferrer"
            >
              fetch 函数
            </a>
            发出的请求
          </li>
          <li>
            用{" "}
            <a
              href="https://nodejs.org/api/crypto.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              crypto
            </a>{" "}
            库和{" "}
            <a
              href="https://www.npmjs.com/package/jsonwebtoken"
              target="_blank"
              rel="noopener noreferrer"
            >
              JWT
            </a>{" "}
            实现加密用户密码和免密码登录
          </li>
          <li>
            用{" "}
            <a
              href="https://www.youtube.com/watch?v=mbsmsi7l3r4&t=24s"
              target="_blank"
              rel="noopener noreferrer"
            >
              accessToken 和 refreshToken
            </a>{" "}
            增强用户访问安全
          </li>
          <li>
            用{" "}
            <a
              href="https://www.npmjs.com/package/redis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redis
            </a>{" "}
            缓存用户登录验证码，用{" "}
            <a
              href="https://www.npmjs.com/package/nodemailer"
              target="_blank"
              rel="noopener noreferrer"
            >
              nodemailer
            </a>{" "}
            向用户邮箱发送验证码
          </li>
          <li>
            用{" "}
            <a
              href="https://socket.io/docs/v4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              socket.io
            </a>{" "}
            实现
            <a
              href="https://github.com/lorem314/mern-social-v9?tab=readme-ov-file#%E7%94%A8%E6%88%B7%E8%81%8A%E5%A4%A9%E5%8A%A8%E5%9B%BE"
              target="_blank"
              rel="noopener noreferrer"
            >
              聊天
            </a>
            功能
          </li>
        </ul>
        <div>
          Github 地址：
          <a
            href="https://github.com/lorem314/mern-project-v6"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/lorem314/mern-project-v6
          </a>
        </div>
        <div>也用 NextJS 14 重写过该项目</div>
        <ul className="pl-8 list-disc">
          <li>
            用 TypeScript 和{" "}
            <a
              href="https://github.com/lorem314/next-social-v1/blob/main/src/server/procedures/user/create.ts#L10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zod
            </a>{" "}
            管理前后端类型安全
          </li>
          <li>
            前端通过{" "}
            <a
              href="https://github.com/lorem314/next-social-v1/tree/main/src/app/_trpc"
              target="_blank"
              rel="noopener noreferrer"
            >
              tRPC
            </a>{" "}
            与后端进行通信，后端通过{" "}
            <a
              href="https://github.com/lorem314/next-social-v1/blob/main/prisma/schema.prisma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prisma
            </a>{" "}
            链接 MongoDB 数据库
          </li>
          <li>
            用 NextAuth 中的{" "}
            <a
              href="https://github.com/lorem314/next-social-v1/blob/main/src/app/api/auth/%5B...nextauth%5D/route.ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credentials
            </a>{" "}
            认证实现用户注册与登录
          </li>
        </ul>
      </section>

      <section className="my-4">
        <h3 className="ContentTitle">学习资源</h3>
        <div>
          <small>该部分旨在通过我所浏览过的资源来更好地了解我个人</small>
        </div>

        <section className="my-2">
          <h4 className="font-bold">
            {"我所浏览过的由 O'Reilly Media 出版的书籍"}
          </h4>
          <p>
            <small>
              大多数书籍资源均购买自{" "}
              <a
                href="https://www.humblebundle.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Humble Bundle
              </a>
            </small>
          </p>
          <ul>
            {studyBooks.map((book, index) => {
              return (
                <li key={index}>
                  <a href={book.href} target="_blank" rel="noopener noreferrer">
                    {book.title}
                  </a>
                  {typeof book.description === "string" ? (
                    <p>{book.description}</p>
                  ) : (
                    book.description
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        <section className="my-2">
          <h4 className="font-bold">我所关注的 React 资源</h4>
          <ul>
            {studySites.map((site, index) => {
              return (
                <li key={index}>
                  <a href={site.href} target="_blank" rel="noopener noreferrer">
                    {site.title}
                  </a>
                  <p>{site.description}</p>
                </li>
              )
            })}
          </ul>
        </section>

        {/*  */}
      </section>

      {/*  */}
    </div>
  )
}

export default Page

const studyBooks = [
  {
    title: "Learning React - First Edition",
    href: "https://www.oreilly.com/library/view/learning-react/9781491954614/",
    description:
      "我所看的第一本关于 React 的书，印象比较深的是第 3 章中用数组中的 map 和 reduce 函数通过函数式编程实现了 redux 中的 compose 函数。",
    online:
      "https://library.kre.dp.ua/Books/2-4%20kurs/%D0%9C%D0%BE%D0%B2%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F/JavaScript/Learning_React_Modern_Patterns_for_Developing_React_Apps_by_Alex.pdf",
  },
  {
    title: "Full-Stack React Projects - Second Edition",
    href: "https://www.oreilly.com/library/view/full-stack-react-projects/9781839215414/",
    description:
      "讲解如何用 MongoDB、Express、React 和 Node 组成 MERN 全栈开发。个人项目中的 MERN-Social 也是收该书中的项目启发，经过多次改动而成。",
    online: "",
  },
  {
    title: "Distributed Systems with Node.js",
    href: "",
    description: (
      <p>
        目前正在翻译的关于构建 Node 后端服务的书。你可以从我的各版本的博客中的
        <Link target="_blank" href="/books">
          书籍页面
        </Link>
        中找到已翻译的部分。最近一次翻译改动也已是几个月前，第 17
        版本的博客框架由 Gatsby 转为 NextJS，需要重新编辑 mdx
        文件，借此机会打算重新翻译。
      </p>
    ),
    online: "",
  },
]
const studySites = [
  {
    title: "React 官网",
    href: "https://react.dev",
    description:
      "最权威的官方解释，通过其教程也能更好地理解 React 的设计思想。",
  },
  {
    title: "JSer.dev",
    href: "https://jser.dev/series/react-source-code-walkthrough",
    description:
      "React 源码解析的博客，并且有对应的视频解释，目前比较关注的资源之一。",
  },
  {
    title: "BFE.dev",
    href: "https://bigfrontend.dev/react-quiz",
    description:
      "大前端 (BigFrontEnd) 测试题。包括了 JavaScript、React 和 TypeScript 等前端相关知识的测试题，适合面试出题。",
  },
  {
    title: "TypeHero",
    href: "https://typehero.dev",
    description:
      "与 TypeScript 开发人员社区建立联系、协作和一同成长。通过交互式编码来挑战、讨论和知识共享来提升 TS 技能。",
  },
  {
    title: "Web Dev Simplified",
    href: "https://www.youtube.com/@WebDevSimplified",
    description:
      "时常浏览的 Youtuber 之一，主要讲解 React 和 Node 相关的技术。",
  },
]
