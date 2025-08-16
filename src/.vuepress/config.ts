import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "德默网络工作室",
  description: "德默网络",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
