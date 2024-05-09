const{test,expect}=require("@playwright/test");

import {Register} from './register.js';
// import testdata from '../tests/testdata.json';

test.describe("TestSuite for Register",()=>{

    test("Register to nopcommerce",async({page})=>{
        const register=new Register(page);
     await register.gotoNopCommerce();
     await register.clickOnRegBtn();
     await register.selectGender();
     await register.selectName();
     await register.selectDOB();
    })
})



// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
