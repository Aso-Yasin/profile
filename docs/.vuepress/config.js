import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Profile',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: '/images/github-50.png',

    navbar: [
      { text: "Home", link: "/" },
      { text: "Project", link: "/projects.html" }, 
      { text: "Skill", link: "/skills.html" }
    ],
  }),

  bundler: viteBundler(),
})
