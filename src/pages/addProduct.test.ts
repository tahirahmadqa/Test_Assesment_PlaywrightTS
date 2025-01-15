import { test, expect } from '@playwright/test';
import { AddProductPage } from '../pages/AddProductPage';
import { LogInCreds} from '../utils/TestDataGenerator';



test.describe('User logs in and adds product to cart', () => {
    test('Should be able to add product to cart', async ({ page }) => {
      // Pass both `page` and `baseURL` to the SignupPage constructor
      const addProduct = new AddProductPage(page);
      const loginData = LogInCreds.logInData();
      // Navigate to the main page (base URL)
      await addProduct.navigateTo('/'); // Root path, baseURL will prepend this
      await addProduct.navigateToLogInPage()
  
      // Verify the URL contains the expected fragment or query parameter
      const currentUrl = await page.url();
      expect(currentUrl).toContain('user/protocol/openid-connect/auth?client_id');
  
      await addProduct.logIn(loginData.email, loginData.password)
      await addProduct.addItems()
    });
  });