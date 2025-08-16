import comp from "D:/web-front-workspace/demostudio/src/.vuepress/.temp/pages/posts/tomato.html.vue"
const data = JSON.parse("{\"path\":\"/posts/tomato.html\",\"title\":\"番茄\",\"lang\":\"zh-CN\",\"frontmatter\":{\"article\":false,\"cover\":\"/assets/images/cover2.jpg\",\"icon\":\"pen-to-square\",\"date\":\"2022-01-12T00:00:00.000Z\",\"category\":[\"蔬菜\"],\"tag\":[\"红\",\"圆\"],\"star\":true,\"sticky\":true,\"description\":\"番茄 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.13,\"words\":40},\"filePathRelative\":\"posts/tomato.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
