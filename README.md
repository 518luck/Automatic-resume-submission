![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&style=for-the-badge)
![Puppeteer](https://img.shields.io/badge/Puppeteer-Core-brightgreen?logo=puppeteer&style=for-the-badge)
<br/>
![puppeteer-extra](https://img.shields.io/badge/puppeteer--extra-Plugin-blueviolet?style=for-the-badge)
![Stealth](https://img.shields.io/badge/Stealth-Plugin-orange?style=for-the-badge)
![fs-extra](https://img.shields.io/badge/fs--extra-File%20System-yellow?style=for-the-badge)
![node-fetch](https://img.shields.io/badge/node--fetch-HTTP%20Client-lightgrey?style=for-the-badge)
<br/>
<pre>
  <code>
    /Automatic-resume-submission
    ├─ mian.ts                  // 主入口（启动脚本）
    ├─ /pages                   // 各招聘网站页面操作
    │    ├─ zhipin.ts           // BOSS直聘相关操作
    │    ├─ liepin.ts           // 猎聘相关操作（目前木有）
    │    └─ ...                 // 其他招聘网站
    ├─ /services                // 业务逻辑层（如投递简历、登录等）
    │    ├─ resumeSubmitter.ts  // 简历投递服务
    │    ├─ loginService.ts     // 登录服务
    │    └─ ...                 
    ├─ /utils                   // 工具函数
    │    ├─ browser.ts          // 浏览器启动/连接工具
    │    ├─ logger.ts           // 日志工具
    │    └─ ...
    ├─ /config                  // 配置文件
    │    └─ index.ts            // 统一配置入口
    ├─ /data                    
    │    └─ /userData           // 浏览器持久化数据
    ├─ package.json
    ├─ tsconfig.json
    └─ README.md
  </code>
</pre>

<hr/>
建议自己登录之后在重新启动一下
为了防止DDOS,每次点击和输入会有500ms左右的间隔
