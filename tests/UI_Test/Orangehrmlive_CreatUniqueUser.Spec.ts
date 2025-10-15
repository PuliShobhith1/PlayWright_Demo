import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Test1234');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Test1234');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.waitForTimeout(8000)
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Type for hints...' }).press('Enter');
  
  const d = new Date();
  let ms = d.getMilliseconds();
  const UserName = 'Puli' + ms;
  await page.getByRole('textbox').nth(2).fill(UserName);
  await page.getByRole('button', { name: 'Save' }).click();

  // await page.pause()
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  
  await expect(page.locator("//div[text()='"+UserName+"']")).toHaveText(UserName);

  await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  // await page.pause()


});