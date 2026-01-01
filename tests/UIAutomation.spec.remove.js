const { test } = require('@playwright/test')

// test.describe('UI Automation Tests', () => {
test('should load the google homepage', async ({ page }) => {
  await page.goto('https://google.com')
  // await page.waitForSelector('h1')
});
test('should load the facebook homepage', async ({ browser }) => {
  const context = await browser.newContext({
    // viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();
  await page.goto('https://facebook.com')
  // await page.waitForSelector('h1')
});
// });