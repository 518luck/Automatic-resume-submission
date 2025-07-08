import { launchBrowser } from './utils/browser'
;(async () => {
  const browser = await launchBrowser()

  const page = await browser.newPage()

  await page.goto('https://www.zhipin.com')
})()
