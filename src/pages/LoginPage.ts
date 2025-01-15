import { BasePage } from './BasePage';

export class LogInPage extends BasePage {
    private acceptCookiesButton = "(//button[normalize-space()='Accept All Cookies'])[1]";
    private profileIconButton = "(//button[@type='button'])[63]";
    private emailField = "(//input[@id='username'])[1]";
    private passwordField = "(//input[@id='password'])[1]";
    private signInButton = "(//button[normalize-space()='Sign in'])[1]"

    async navigateToLogInPage(): Promise<void>{
        await this.click(this.acceptCookiesButton);
        await this.click(this.profileIconButton);
    }

    async logIn(username: string, password: string): Promise<void>{
        await this.type(this.emailField, username);
        await this.type(this.passwordField, password);
        await this.click(this.signInButton);
        await this.page.waitForTimeout(3000)
    }
}