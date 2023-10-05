// @ts-check
const { test, expect } = require('@playwright/test');

const {
  RahulAcademyPracticePage,
} = require('../pages/rahulAcademyPracticePage');

test('Performing all the actions ', async ({ page }) => {
  const rahulAcademyPracticePage = new RahulAcademyPracticePage(page);
  await rahulAcademyPracticePage.navigationToULR(page);
  await rahulAcademyPracticePage.checkingRadioButtons(page);
});

test('Navigation to page ', async ({ page }) => {
  const rahulAcademyPracticePage = new RahulAcademyPracticePage(page);
  //!! navigating to the baseURL  ** goto('/') will naviagte to home page i.e *"https://rahulshettyacademy.com/"
  await page.goto('/AutomationPractice/'); //!! here it is navigating to "baseURL+/AutomationPractice/"
  await rahulAcademyPracticePage.clickingOnAlertButton(page);
  await rahulAcademyPracticePage.handleNewPage(page);
});
