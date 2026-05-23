import { chromium } from 'playwright'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images', 'projects')

const targets = [
  { file: 'trustfund.png', url: 'https://trustfundcapitalmgt.com/' },
  { file: 'globedispatch.png', url: 'https://globedispatch.org/' },
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })

await mkdir(outDir, { recursive: true })

for (const { file, url } of targets) {
  console.log(`Capturing ${url} -> ${file}`)
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 })
  await page.waitForTimeout(2500)
  await page.screenshot({
    path: path.join(outDir, file),
    fullPage: false,
    type: 'png',
  })
}

await browser.close()
console.log('Done.')
