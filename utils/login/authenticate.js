// const { chromium } = require('@playwright/test');
// // const { SecretManager } = require("../secrets-manager");
// const StringUtils = require('../string.utils');
// const sessionUtils = require('../session');
// const { use } = require('../playwright.config');
// require('dotenv').config();

// function useUser(test, userKeys) {
//   sessionUtils.useSession(test, buildStorageFilePath(userKeys));
// }

// function buildStorageFilePath(userKeys) {
//   const file = StringUtils.ensureDoesNotStartWith(
//     userKeys.storageStateFile,
//     '/'
//   );
//   return sessionUtils.storageFileLocation + file;
// }

// // Log-in to WebCP and store the session cookie out for re-use.
// async function authenticateWebCP(config, userKeys) {
//   const { baseURL } = config.projects[0].use;
//   const userName = process.env.USERNAME;
//   const password = process.env.PASSWORD;
//   const storageStatePath = buildStorageFilePath(userKeys);

//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto(`${baseURL}/login`);
//   await page.fill('#username', userName);
//   await page.click('.login-email__next .btn.btn-primary');
//   await page.waitForNavigation();
//   await page.fill('input#password', password);
//   await page.click('.login-password__action .btn.btn-primary');

//   await sessionUtils.saveSession(page, storageStatePath);

//   await browser.close();
// }

// async function clearSession(userKeys) {
//   const storageStatePath = buildStorageFilePath(userKeys);
//   sessionUtils.clearSession(storageStatePath);
// }

// module.exports = {
//   useUser,
//   authenticateWebCP,
//   clearSession,
//   buildStorageFilePath,
// };
