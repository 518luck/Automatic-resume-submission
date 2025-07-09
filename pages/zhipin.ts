import { Page } from 'puppeteer-core'
import logger from '../utils/logger'

/**
 * 自动选择城市并搜索职位
 *
 * 此函数用于在BOSS直聘页面自动完成城市选择和职位搜索流程。
 * 步骤包括：
 * 1. 点击城市选择按钮
 * 2. 输入城市名称（依赖环境变量 CITY）
 * 3. 从下拉列表中选择目标城市
 * 4. 输入职位关键词（依赖环境变量 JOB）
 * 5. 提交搜索并等待结果列表出现
 *
 * @param {Page} page - Puppeteer 的 Page 实例，表示当前浏览器页面
 * @returns {Promise<void>} - 无返回值，流程中如遇错误会提前 return 并记录日志
 * @throws 无显式抛出异常，流程中如遇页面元素未找到会记录错误日志并提前返回
 * @environment CITY - 需设置为目标城市名称（如“北京”）
 * @environment JOB - 需设置为搜索的职位关键词
 */
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
  await page.keyboard.press('Enter')
  logger.info('搜索提交')

  await page.waitForSelector('ul[class="rec-job-list"]', { timeout: 10000 })
  logger.info('搜索结果出现')
}
