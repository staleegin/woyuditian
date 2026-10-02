import { defineConfig } from 'vitepress'
import { resolve } from 'node:path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.BASE_URL || (repoName ? `/${repoName}/` : '/')

export default defineConfig({
  lang: 'zh-CN',
  title: '我与地坛',
  description: '史铁生作品在线阅读',
  base,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ],

  vite: {
    css: {
      preprocessorOptions: {},
    },
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/chapters/01' },
    ],

    sidebar: [
      {
        text: '《我与地坛》',
        items: [
          { text: '01 · 我与地坛', link: '/chapters/01' },
          { text: '02 · 我二十一岁那年', link: '/chapters/02' },
          { text: '03 · 合欢树', link: '/chapters/03' },
          { text: '04 · 秋天的怀念', link: '/chapters/04' },
          { text: '05 · 墙下短记', link: '/chapters/05' },
          { text: '06 · 黄土地情歌', link: '/chapters/06' },
          { text: '07 · 我的梦想', link: '/chapters/07' },
          { text: '08 · 好运设计', link: '/chapters/08' },
          { text: '09 · 记忆与印象1', link: '/chapters/09' },
          { text: '10 · 记忆与印象2', link: '/chapters/10' },
          { text: '11 · 想念地坛', link: '/chapters/11' },
          { text: '12 · 扶轮问路（代跋）', link: '/chapters/12' },
        ],
      },
    ],

    outline: {
      level: [2, 3],
      label: '本章目录',
    },

    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
  },
})
