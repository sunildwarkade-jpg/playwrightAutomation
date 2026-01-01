const {test, expect} = require('@playwright/test')

test.only('home page test', async({page})=>{
   await page.goto('https://demoblaze.com/');
   const pageTitle = await page.title();
   console.log("page title is: " + pageTitle);
   await expect(page).toHaveTitle('STORE');
    const pageURL = page.url();
   console.log("page url is: " + pageURL);

   await expect(page).toHaveURL('https://demoblaze.com/');
   await page.close();
});
