import {test, expect} from '@playwright/test';

test('login with valid username and password', async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
await page.getByPlaceholder('Enter Email').fill('admin@email.com');
await page.getByPlaceholder('Enter Password').fill('admin@123');
await page.getByText('Sign in').last().click();
// await page.locator('#id').fill('abcd');
await page.getByAltText('menu').click();
await page.getByText('Sign out').click();
await expect(page).toHaveURL(/automation/);
});