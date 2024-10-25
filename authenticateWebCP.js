import { test as setup, expect } from '@playwright/test';
require('dotenv').config();

exports.authenticateWebCP = class AuthenticateWebCP {
  authenticateWebCP = async (username, password) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(process.env.RAHUL_ACADEMY_BASE_URL);
    await page.locator('input[data-test="username"]').fill(username);
    await page.locator('input[data-test="password"]').fill(password);
    await page.locator('input[id="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
  };
};
export async function clearSession(username, password) {
  const storageStatePath = buildStorageFilePath(username, password);
  sessionUtils.clearSession(storageStatePath);
}

// Utility for building a Playwright state-file path from testInitData
export function buildStateFilePath(username, password) {
  return `tests/state/${username
    .replace(/\s+/g, '-')
    .toLowerCase()}-${password}`;
}
