import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { TestDataGenerator } from '../utils/TestDataGenerator';

test.describe('Sign up page navigation and validation', () => {
  test('should navigate to the sign up page and validate the URL and sign up with a user', async ({ page }) => {
    // Pass both `page` and `baseURL` to the SignupPage constructor
    const signUpPage = new SignUpPage(page);
    const userData = TestDataGenerator.generateUserData();
    // Navigate to the main page (base URL)
    await signUpPage.navigateTo('/'); 
    await signUpPage.navigateToSignUpPage()
    await signUpPage.signUp(userData.title, userData.firstName, userData.lastName, userData.day, userData.month, userData.year, userData.phoneNumber, userData.homeAddress, userData.email, userData.password)
    await signUpPage.verifyAccountCreated();
  });
});
