import { CodeTabs } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+plugin-markdown-t_1dc2e49b85033e80feed4079da72c5a2/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+plugin-markdown-t_1dc2e49b85033e80feed4079da72c5a2/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+plugin-markdown-t_1dc2e49b85033e80feed4079da72c5a2/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
