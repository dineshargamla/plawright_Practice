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
    await expect(this.firstRadioButton).not.toBeChecked();
  };

  // Function to handle alert dialog
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

  // Call this function when you're done with the page or the test

  // clickingOnAlertButton = async (page) => {
  //   await this.alertInputField.fill('Dinesh');
  //   //!!For  alerts are used for information so there will be only one button saying "OK"
  //   page.on('dialog', async (dialog) => {
  //     expect(await dialog.message()).toEqual(
  //       'Hello Dinesh, share this practice page and share your knowledge'
  //     );
  //     await dialog.accept();
  //   });
  //   await this.alertButton.click();
  //   await page.waitForTimeout(3000);

  //   //   await this.alertInputField.fill('Kamal');
  //   //   // !! For confirm button we have two dialog boxes where we need accept it or dismiss it
  //   //   page.on('dialog', async (dialog) => {
  //   //     expect(await dialog.message()).toEqual(
  //   //       'Hello Kamal , Are you sure you want to confirm?'
  //   //     );
  //   //     dialog.dismiss();
  //   //   });
  //   //   await this.confirmButton.click();
  //   //   await page.waitForTimeout(3000);

  //   //   await this.alertInputField.fill('Shiva');
  //   //   page.on('dialog', async (dialog) => {
  //   //     expect(await dialog.message()).toEqual(
  //   //       'Hello Shiva , Are you sure you want to confirm?'
  //   //     );
  //   //     await dialog.accept();
  //   //   });
  //   //   await this.confirmButton.click();
  // };
};
