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
