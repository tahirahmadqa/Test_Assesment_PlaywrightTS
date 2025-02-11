import { test, expect } from '@playwright/test';
import { AddProductPage } from '../pages/AddProductPage';
import { LogInCreds} from '../utils/TestDataGenerator';
import { LogInPage } from '../pages/LoginPage';

test.describe('User logs in and adds product to cart', () => {
    test('Should be able to add product to cart', async ({ page }) => {
      const logInPage = new LogInPage(page);
      const loginData = LogInCreds.logInData();
      const addProduct = new AddProductPage(page);
      // Navigate to the main page (base URL)
      await logInPage.navigateTo('/'); // Root path, baseURL will prepend this
      await logInPage.navigateToLogInPage()
  
      // Verify the URL contains the expected fragment or query parameter
      const currentUrl = await page.url();
      expect(currentUrl).toContain('user/protocol/openid-connect/auth?client_id');
  
      await logInPage.logIn(loginData.email, loginData.password) 
      await logInPage.sendCodeAndVerify();
      await logInPage.myAccountToBeVisible();
      await addProduct.addItems()
    });
  });