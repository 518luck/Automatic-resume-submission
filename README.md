/Automatic-resume-submission
├─ mian.ts                  // 主入口（启动脚本）
├─ /pages                   // 各招聘网站页面操作
│    ├─ zhipin.ts           // BOSS直聘相关操作
│    ├─ liepin.ts           // 猎聘相关操作（如有）
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
├─ /longTimeMemory          // 浏览器持久化数据
├─ package.json
├─ tsconfig.json
└─ README.md