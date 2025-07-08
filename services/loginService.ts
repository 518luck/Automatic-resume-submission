import { Page } from 'puppeteer-core'
import logger from '../utils/logger'

/**
 * 判断当前页面是否已登录
 *
 * 该函数会查找页面上是否存在 BOSS直聘的“登录/注册”按钮（a[ka="header-login"]）。
 * 如果找不到该按钮，说明已登录；如果能找到，说明未登录。
 *
 * @param {Page} page - Puppeteer 的 Page 实例，表示要检测的页面
 * @returns {Promise<boolean>} - 已登录返回 true，未登录返回 false
 */
export async function isLoggedIn(page: Page): Promise<boolean> {
  const loginBtn = await page.$('a[ka="header-login"]')
  return !loginBtn
}

/**
 * 自动登录函数
 * @param page Puppeteer Page 实例
 */
export async function autoLogin(page: Page) {
  const loginBtn = await page.$('a[ka="header-login"]')
  console.log(loginBtn)
}
