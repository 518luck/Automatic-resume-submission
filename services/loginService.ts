import { Page } from 'puppeteer-core'

// 判断是否登录
export async function isLoggedIn(page: Page): Promise<boolean> {
  const loginBtn = await page.$('a[ka="header-login"]')
  return !loginBtn
}
