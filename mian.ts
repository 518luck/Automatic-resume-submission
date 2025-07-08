import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import fetch from 'node-fetch'
import fs from 'fs-extra'
import path from 'path'
import { channel } from 'diagnostics_channel'

puppeteer.use(StealthPlugin())

async function AutomaticResumeSubmission() {
  // 启动浏览器
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
    headless: false,
    userDataDir: './UserData',
  })
  const pages = await browser.pages()
  await pages.goto('https://www.zhipin.com/web/geek/jobs')
}

AutomaticResumeSubmission()
