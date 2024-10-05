import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: '/nav' },
  { text: '自定义导航', link: '/nav' },
  {
    text: '友情链接',
    items: [
      { text: '星渊基石', link: 'https://idc.oteam.top' },
      { text: '服务器状态监测', link: 'https://bj-xq27.oteam.top' }
    ]
  }
],