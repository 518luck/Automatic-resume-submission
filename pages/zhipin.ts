import { Page } from 'puppeteer-core'
import logger from '../utils/logger'

export async function selectCity(page: Page) {
  const citySelect = await page.$('p[ka="header-switch-city"]')
  if (citySelect) {
    await citySelect.click()
    logger.info('点击了城市选择按钮')
  } else {
    logger.error('完犊子了，没找到城市选择按钮')
    return
  }

  await page.waitForSelector("input[class='city-current']", {
    timeout: 10000,
  })
  logger.info('城市选择框出现')
  const city = process.env.CITY
  if (!city) {
    logger.error('城市未配置')
    return
  }

  await page.type("input[class='city-current']", city, {
    delay: Math.random() * 150 + 50,
  })
  logger.info('城市输入完成')

  await page.waitForSelector("ul[class='dropdown-list']", { timeout: 10000 })
  logger.info('城市选择列表出现')
  const element = await page.$(`li[data-name="${city}"]`)
  if (element) {
    await element.click()
    logger.info(`点击了城市: ${city}`)
  } else {
    logger.error(`完犊子了，没找到城市: ${city}`)
    return
  }

  const job = process.env.JOB
  if (!job) {
    logger.error('职位未配置')
    return
  }
  await page.waitForSelector('input[class="ipt-search"]', { timeout: 10000 })
  await page.type('input[class="ipt-search"]', job, {
    delay: Math.random() * 150 + 50,
  })
  logger.info('搜索输入完成')

  await page.waitForSelector('ul[class="search-result"]', { timeout: 10000 })
  logger.info('搜索结果出现')
}
