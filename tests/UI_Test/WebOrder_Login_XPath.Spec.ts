import { test, expect } from '@playwright/test';

test('Verify Login Orange HRM ', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator("//div[@class='orangehrm-login-branding']")).toBeVisible();
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();

}); 