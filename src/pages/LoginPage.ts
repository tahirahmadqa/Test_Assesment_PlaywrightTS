import { expect } from 'playwright/test';
import { BasePage } from './BasePage';
import { LogInCreds} from '../utils/TestDataGenerator';

export class LogInPage extends BasePage {
    private acceptCookiesButton = "//button[text()='Accept All Cookies']";
    private profileIconButton = "[data-testid='signin-test']";
    private emailField = "#username";
    private passwordField = "#password";
    private signInButton = "#signInButton"
    private myAccountLink = '[data-testid="my-account-link"]'
    private sendCodeButton = "#send-code-button"
    private enterInboxEmailInput = '[aria-label="inbox field"]'
    private firstEmailLocator = '//tbody/following::td[2]'
    private code = "//h2"
    private otpCodeInput = "#otpCode"
    private otpSubmitButton = "#otpSubmitButton"

    async navigateToLogInPage(): Promise<void>{
        await this.click(this.acceptCookiesButton);
        await this.page.locator(this.profileIconButton).nth(1).click();
    }

    async logIn(username: string, password: string): Promise<void>{
        await this.type(this.emailField, username);
        await this.type(this.passwordField, password);
        await this.click(this.signInButton);
    }

    async sendCodeAndVerify(): Promise<void> {
        const loginData = LogInCreds.logInData();
        const sendCodeButtonLocator = this.page.locator(this.sendCodeButton);
        await sendCodeButtonLocator.waitFor({ state: 'visible', timeout: 5000 });
        if (await sendCodeButtonLocator.isVisible()) {
            await sendCodeButtonLocator.click();
            await this.page.waitForTimeout(10000);
            console.log('Send Code button clicked.');
            const newTab = await this.page.context().newPage();
            await newTab.goto('https://www.mailinator.com/v4/public/inboxes.jsp');
            await newTab.locator(this.enterInboxEmailInput).fill(loginData.email);
            await newTab.keyboard.press('Enter');
            await newTab.locator(this.firstEmailLocator).click();
            console.log('Opened the email.');
            // Switch to the iframe to access the OTP code
            const iframe = await newTab.frameLocator('#html_msg_body');
            const codeLocator = iframe.locator(this.code);
            // Wait for the OTP code to be visible and retrieve its text content
            await codeLocator.waitFor({ timeout: 10000 });
            const code = await codeLocator.textContent();
            if (code) {
                await this.page.bringToFront();
                const otpCode = code.trim();
                await this.page.locator(this.otpCodeInput).fill(otpCode);
                console.log(`OTP Code: ${otpCode} successfully filled.`);
                await this.page.locator(this.otpSubmitButton).click();
            } else {
                console.error('Failed to retrieve OTP code. The text content is null.');
            }
        } else {
            console.log('Send Code button is not visible. Skipping click action.');
        }
    }
    


    async myAccountToBeVisible(): Promise<void>{
        await this.page.locator(this.myAccountLink).nth(0).waitFor({ state: 'attached', timeout: 20000 });
        await expect(this.page.locator(this.myAccountLink).nth(0)).toBeTruthy;
        console.log('myAccountLink is available in the DOM.');
    }


}