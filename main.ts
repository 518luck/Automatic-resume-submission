import { launchBrowser } from './utils/browser'
import logger from './utils/logger'
;(async () => {
  logger.info('程序启动')
  const browser = await launchBrowser()
  const page = await browser.newPage()
  logger.info('浏览器启动')
  await page.goto('https://www.zhipin.com')
})()
