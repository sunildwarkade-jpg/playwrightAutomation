import {test, expect} from '@playwright/test';

test('Verify URL contains', async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/signup');
const url = await page.url();
expect(url).toContain('signup');
});

test('Verify title', async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app')
const title = await page.title();
expect(title).toContain('Automation');
})