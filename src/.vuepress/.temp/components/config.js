import { hasGlobalComponent } from "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_dbe017eb872c7c88b5da06bb9cc5187a/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-plugin-components@_3b5b14af3248a6fb7d85dd4c0c49b57e/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/web-front-workspace/demostudio/node_modules/.pnpm/vuepress-plugin-components@_3b5b14af3248a6fb7d85dd4c0c49b57e/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/web-front-workspace/demostudio/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_dbe017eb872c7c88b5da06bb9cc5187a/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
