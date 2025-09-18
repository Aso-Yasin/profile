export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/project.html", { loader: () => import(/* webpackChunkName: "project.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/project.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/skill.html", { loader: () => import(/* webpackChunkName: "skill.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/skill.html.js"), meta: {"title":"Technical Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/MIQDAD/Desktop/vue/profile/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
