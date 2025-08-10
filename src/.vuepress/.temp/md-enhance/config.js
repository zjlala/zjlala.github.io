import CodeDemo from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-plugin-md-enhance@_01dbe01b0c456ea73441e4fb8ef56bf6/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-plugin-md-enhance@_01dbe01b0c456ea73441e4fb8ef56bf6/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
