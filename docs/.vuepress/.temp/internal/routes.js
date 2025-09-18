export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/skills.html", { loader: () => import(/* webpackChunkName: "skills.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/skills.html.js"), meta: {"title":"Technical Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
