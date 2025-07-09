import { Page } from 'puppeteer-core'
import logger from 'winston'
import fs from 'fs'
import https from 'https'
import path from 'path'

export async function fetchWoffFromPage(page: Page, saveDir = '.') {
  logger.info('进入woff字体获取函数')
  const fontUrls = await page.evaluate(() => {
    const urls: string[] = []
    // 从 style 标签中查找 .woff 链接
    document.querySelectorAll('style').forEach((style) => {
      if (!style.textContent) return
      const matches =
        style.textContent.match(/url\(([^)]+\.woff)[^)]+\)/g) || []
      matches.forEach((match) => {
        const url = match.match(/url\(["']?([^"')]+\.woff)["']?\)/)?.[1]
        if (url) {
          const fullUrl = url.startsWith('http') ? url : 'https:' + url
          urls.push(fullUrl)
        }
      })
    })
    return urls
  })

  if (fontUrls.length === 0) {
    logger.error('未找到 woff 字体链接')
    return
  }

  for (const fontUrl of fontUrls) {
    const fileName = path.basename(fontUrl)
    const filePath = path.join(saveDir, fileName)
    const file = fs.createWriteStream(filePath)
    https.get(fontUrl, (res) => {
      res.pipe(file)
      file.on('finish', () => {
        file.close()
        logger.info(`下载完成: ${filePath}`)
      })
    })
  }
}
