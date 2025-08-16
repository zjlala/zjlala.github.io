import comp from "D:/web-front-workspace/demostudio/src/.vuepress/.temp/pages/posts/crawler/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/crawler/1.html\",\"title\":\"苹果 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"苹果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"苹果 1 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"posts/crawler/1.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
