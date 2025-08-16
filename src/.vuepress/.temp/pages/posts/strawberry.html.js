import comp from "D:/web-front-workspace/demostudio/src/.vuepress/.temp/pages/posts/strawberry.html.vue"
const data = JSON.parse("{\"path\":\"/posts/strawberry.html\",\"title\":\"草莓\",\"lang\":\"zh-CN\",\"frontmatter\":{\"article\":false,\"icon\":\"pen-to-square\",\"date\":\"2022-01-11T00:00:00.000Z\",\"category\":[\"水果\",\"草莓\"],\"tag\":[\"红\",\"小\"],\"description\":\"草莓 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"posts/strawberry.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
