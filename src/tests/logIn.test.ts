import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/LoginPage';
import { LogInCreds} from '../utils/TestDataGenerator';


test.describe('Existing uer can login successfully', () => {
    test('Should navigate to login page and verify user can log In', async ({ page }) => {
      // Pass both `page` and `baseURL` to the SignupPage constructor
      const logInPage = new LogInPage(page);
      const loginData = LogInCreds.logInData();
      // Navigate to the main page (base URL)
      await logInPage.navigateTo('/'); // Root path, baseURL will prepend this
      await logInPage.navigateToLogInPage()
  
      // Verify the URL contains the expected fragment or query parameter
      const currentUrl = await page.url();
      expect(currentUrl).toContain('user/protocol/openid-connect/auth?client_id');
  
      await logInPage.logIn(loginData.email, loginData.password)
  
      // // Optionally log the current URL for debugging purposes
      // console.log(`Navigated to URL: ${currentUrl}`);
  
      // await signUpPage.login("malik.uzair.cs@gmail.com", "Helloworld@8695")
      // const myAccountLink = page.locator("(//a[@title='My Account'])[1]");
      // await expect(myAccountLink).toBeVisible();
    });
  });