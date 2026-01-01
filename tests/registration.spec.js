import {test, expect} from '@playwright/test';

test('verify registration functionality', async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/login');
await page.getByText('New user? Signup').click();
await page.getByPlaceholder('Name').fill('Khushi');
await page.getByPlaceholder('Email').fill('khushi@gmail.com');
await page.getByPlaceholder('Password').fill('khushi@123');
await page.getByText('Playwright').click();
await page.locator('#gender2').click();
await page.locator('#state').selectOption('karnataka');           //selectOption will work for the Dd
await page.locator('#hobbies').click(['Playing', 'Swimming', 'Singing']); //pass array when you have to select multiple values in the Dd
await page.getByText('Sign up').last().click();
})