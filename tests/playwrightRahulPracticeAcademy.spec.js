// @ts-check
const { test, expect } = require('@playwright/test');

const {
  RahulAcademyPracticePage,
  foo,
} = require('../pages/rahulAcademyPracticePage');
// import RahulAcademyPracticePage from '../pages/rahulAcademyPracticePage';

test.use({ storageState: './loginAuth.json' });
test('Performing all the actions ', async ({ page }) => {
  const rahulAcademyPracticePage = new RahulAcademyPracticePage(page);
  await rahulAcademyPracticePage.navigationToULR(page);
  await rahulAcademyPracticePage.checkingRadioButtons(page);
  console.log(foo);
});

test('Navigation to page ', async ({ page }) => {
  const rahulAcademyPracticePage = new RahulAcademyPracticePage(page);
  //!! navigating to the baseURL  ** goto('/') will naviagte to home page i.e *"https://rahulshettyacademy.com/"
  await page.goto('./'); //!! here it is navigating to "baseURL+/AutomationPractice/"
  await rahulAcademyPracticePage.clickingOnAlertButton(page);
  await rahulAcademyPracticePage.handleNewPage(page);
  await rahulAcademyPracticePage.handleNewWindow(page);
});

test(' to page ', async ({ page }) => {
  await page.goto('./');
  console.log(foo);
  await page.waitForTimeout(2000);
  await expect(page.locator('.app_logo')).toBeVisible({ timeout: 15000 });
});
