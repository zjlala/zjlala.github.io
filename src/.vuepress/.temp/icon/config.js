import { hasGlobalComponent } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_dbe017eb872c7c88b5da06bb9cc5187a/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vueuse+core@13.6.0_vue@3.5.18/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_6ed3f4027ae151d6b3c970fe7fe65802/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
