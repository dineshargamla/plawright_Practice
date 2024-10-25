import { test, expect } from '@playwright/test';

test('validating Github UI and API', async ({ page }) => {
  await page.goto('https://landlord-qa.howardhughes.com/');

  await page.getByPlaceholder('Email Address*').click();

  await page

    .getByPlaceholder('Email Address*')

    .fill('Test.Manager@howardhughes.com');

  await page.getByRole('button', { name: 'Confirm' }).click();

  await page.getByRole('textbox', { name: 'Password' }).click();

  await page

    .getByRole('textbox', { name: 'Password' })

    .fill('Flow*Police!Lay!This*3');

  await page.getByRole('textbox', { name: 'Username' }).click();

  await page

    .getByRole('textbox', { name: 'Username' })

    .fill('Test.Manager@howardhughes.com');

  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(7000);

  //  await page.waitForLoadState();

  //   await page.goto("https://landlord-qa.howardhughes.com/login/callback");

  //  await page.waitForTimeout(3000);

  //   await page.goto(

  //     "https://landlord-qa.howardhughes.com/home/nft_details_landlord"

  //   ); // Replace with the actual URL of your application

  //   await page.waitForTimeout(3000);

  // Access the cookies or local storage based on your application's setup

  //   const cookies = await context.cookies(); // Use context.cookies() for cookies

  const bearerTokenFromLocalStorage = await page.evaluate(() => {
    // Make sure to return a value from the function

    return localStorage.getItem('token'); // Replace with your local storage key
  });

  console.log('Bearer Token from Local Storage:', bearerTokenFromLocalStorage);

  // }

  // getBearerToken();
});
