const { expect } = require('@playwright/test');

exports.RahulAcademyPracticePage = class RahulAcademyPracticePage {
  constructor(page) {
    this.page = page;

    this.firstRadioButton = page.locator('//input[@value="radio1"]');
    this.secondRadioButton = page.locator('//input[@value="radio2"]');
    this.selectCountryInputfield = page.locator(
      '//input[@placeholder="Type to Select Countries"]'
    );
  }
  navigationToULR = async (page) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  };

  checkingRadioButtons = async (page) => {
    //!! performing check and uncheck actions , checked and unchecked validation(assertion)
    await this.firstRadioButton.check();
    await page.waitForTimeout(2000);
    await expect(this.firstRadioButton).toBeChecked();
    await this.secondRadioButton.check();
    await expect(this.secondRadioButton).toBeChecked();
    await page.waitForTimeout(2000);
    await expect(this.firstRadioButton).not.toBeChecked();
  };
};
