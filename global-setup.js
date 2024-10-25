const { chromium, Browser, expect } = require('@playwright/test');
require('dotenv').config();

async function globalSetup() {
  //   const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext('https://www.saucedemo.com/v1/');
  //   const page = await context.newPage();
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(`https://andersen-webcp-wdev.wtsparadigm.com/login`);
  await page.fill('#username', 'AW_sys_admin_@myparadigm.com');
  await page.click('.login-email__next .btn.btn-primary');
  // await page.waitForNavigation();
  await page.fill('input#password', 'Andersen1!');
  await page.click('.login-password__action .btn.btn-primary');
  await page.context().storageState({ path: 'loginAuth.json' });
  await browser.close();
}

export default globalSetup;
