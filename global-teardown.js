// const { chromium, Browser, expect } = require('@playwright/test');
require('dotenv').config();
const fs = require('fs');

async function globalTeardown() {
  //   const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext('https://www.saucedemo.com/v1/');
  //   const page = await context.newPage();
  // const browser = await chromium.launch({ headless: false });
  // const page = await browser.newPage();

  // await page.goto(`https://andersen-webcp-wdev.wtsparadigm.com/login`);
  // await page.fill('#username', 'AW_sys_admin_@myparadigm.com');
  // await page.click('.login-email__next .btn.btn-primary');
  // // await page.waitForNavigation();
  // await page.fill('input#password', 'Andersen1!');
  // await page.click('.login-password__action .btn.btn-primary');
  // await page.context().storageState({ path: 'loginAuth.json' });
  // await browser.close();

  const filePath = './loginAuth.json';
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    console.log('loginAuth file is not deleted');
  }
}

export default globalTeardown;
