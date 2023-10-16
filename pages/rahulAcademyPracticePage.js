const { expect } = require('@playwright/test');
const { use } = require('../playwright.config');
exports.RahulAcademyPracticePage = class RahulAcademyPracticePage {
  constructor(page) {
    this.page = page;
    this.firstRadioButton = page.locator('//input[@value="radio1"]');
    this.secondRadioButton = page.locator('//input[@value="radio2"]');
    this.selectCountryInputfield = page.locator(
      '//input[@placeholder="Type to Select Countries"]'
    );
    this.alertInputField = page.locator(
      '//input[@placeholder="Enter Your Name"]'
    );
    this.alertButton = page.locator('//input[@value="Alert"]');
    this.confirmButton = page.locator('//input[@value="Confirm"]');
    this.switchNewTabButton = page.locator('//a[@id="opentab"]');
    this.switchNewWindowButton = page.locator('//button[@id="openwindow"]');
  }

  navigationToULR = async (page) => {
    //passing the baseURL from playwright.config file use section
    await page.goto(use.baseURL);
  };

  checkingRadioButtons = async (page) => {
    //!! performing check and uncheck actions , checked and unchecked validation(assertion)
    await this.firstRadioButton.check();
    await page.waitForTimeout(2000);
    await expect(this.firstRadioButton).toBeChecked();
    await this.secondRadioButton.check();
    await expect(this.secondRadioButton).toBeChecked();
    await page.waitForTimeout(2000);
    await expect(this.firstRadioButton).toBeChecked();
  };

  // Function to handle alert dialog
  //!!For  alerts are used for information so there will be only one button saying "OK"
  handleAlertDialog = async (dialog) => {
    console.log(dialog.message());
    expect(await dialog.message()).toEqual(
      'Hello Dinesh, share this practice page and share your knowledge'
    );
    await dialog.accept();
  };

  // Function to handle confirm dialog
  handleConfirmDialog = async (dialog) => {
    console.log(dialog.message());
    expect(await dialog.message()).toEqual(
      'Hello Kamal, Are you sure you want to confirm?'
    );
    await dialog.dismiss();
  };

  // Function to handle another confirm dialog
  handleSecondConfirmDialog = async (dialog) => {
    console.log(dialog.message());
    expect(await dialog.message()).toEqual(
      'Hello Shiva, Are you sure you want to confirm?'
    );
    await dialog.accept();
  };

  clickingOnAlertButton = async (page) => {
    // For alerts
    await this.alertInputField.fill('Dinesh');
    page.on('dialog1', this.handleAlertDialog);
    await this.alertButton.click();
    await page.waitForTimeout(3000);

    // For confirm button
    await this.alertInputField.fill('Kamal');
    page.on('dialog2', this.handleConfirmDialog);
    await this.confirmButton.click();
    await page.waitForTimeout(3000);

    // For the second confirm button
    await this.alertInputField.fill('Shiva');
    page.on('dialog3', this.handleSecondConfirmDialog);
    await this.confirmButton.click();
  };

  handleNewPage = async (page) => {
    const pagePromise = page.waitForEvent('popup');
    await this.switchNewTabButton.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    expect(newPage).toHaveURL('https://www.qaclickacademy.com/');
  };

  handleNewWindow = async (page) => {
    const pagePromise = page.waitForEvent('popup');
    await this.switchNewWindowButton.click();
    const newWindow = await pagePromise;
    await newWindow.waitForLoadState();
    console.log(await newWindow.title());
    expect(newWindow).toHaveURL('http://www.qaclickacademy.com/');
  };
};
