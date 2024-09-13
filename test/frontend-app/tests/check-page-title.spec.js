const { test, expect } = require('@playwright/test')

test('I am on the T-Con page', async ({ page }) => {
    await page.goto('https://t-con.co.uk/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/T-Con/);
})
