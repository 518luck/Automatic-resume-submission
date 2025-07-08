import { launchBrowser } from './utils/browser'
import logger from './utils/logger'
import { isLoggedIn, autoLogin } from './services/loginService'
import dotenv from 'dotenv'

dotenv.config()

void (async () => {
  logger.info('================ 程序启动 ================')
  const browser = await launchBrowser()
  const page = await browser.newPage()

  logger.info('浏览器启动')
  await page.goto('https://www.zhipin.com')

  logger.info('开始判断是否登录')
  const checkLogin = await isLoggedIn(page)
  logger.info(`${checkLogin ? '已登录' : '未登录'}`)

  if (!checkLogin) {
    await autoLogin(page)
  }
})()
