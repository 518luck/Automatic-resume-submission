import { launchBrowser } from './utils/browser'
;(async () => {
  //跳转网址
  const browser = await launchBrowser()
  const page = await browser.newPage()
  await page.goto('https://www.zhipin.com')
})()
