import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "爬虫",
        icon: "pen-to-square",
        prefix: "crawler/",
        children: [
          { text: "爬虫概念", icon: "pen-to-square", link: "basicConcepts" },
        ],
      },

    ],
  },
]);
