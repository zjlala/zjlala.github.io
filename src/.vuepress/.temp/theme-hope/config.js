import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_5fcf8dea5eeff1a853624616e7e65d37/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+plugin-catalog@2._65b83d392fd92d5e95d048a9c60a1211/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_5fcf8dea5eeff1a853624616e7e65d37/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_5fcf8dea5eeff1a853624616e7e65d37/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_5fcf8dea5eeff1a853624616e7e65d37/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_5fcf8dea5eeff1a853624616e7e65d37/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_dbe017eb872c7c88b5da06bb9cc5187a/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_dbe017eb872c7c88b5da06bb9cc5187a/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_dbe017eb872c7c88b5da06bb9cc5187a/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_5fcf8dea5eeff1a853624616e7e65d37/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
