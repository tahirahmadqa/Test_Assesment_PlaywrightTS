import { expect } from 'playwright/test';
import { BasePage } from './BasePage';

export class SignUpPage extends BasePage {
  
  // Other signup methods as before...
  private acceptCookiesButton = "#onetrust-accept-btn-handler";
  private profileIconButton = "[data-testid='signin-test']";
  private newCustomerOption = '#newCustomerButton';
  private selectTitle = "#salutation";
  private firstName = "#firstName";
  private lastName = "#lastName";
  private selectDay = "input#day";
  private selectMonth = "input#month";
  private selectYear = "input#year";
  private phoneNumber = "#phoneNumber";
  private homeAddress = "#address";
  private selectFirstAddress = "div.addressFinder__result";
  private emailAddress = "#email";
  private password = "#password";
  private emailOption = "#emailOptIn";
  private postOption = "#postOptIn";
  private phoneOption = "#phoneOptIn";
  private continueButton = "[name='continue']";
  private accountCreated = '//p[text()="Account created !"]'



  async navigateToSignUpPage(): Promise<void> {
    await this.click(this.acceptCookiesButton);
    await this.page.locator(this.profileIconButton).nth(1).click();
    await this.click(this.newCustomerOption);
    await this.page.waitForTimeout(3000);
  }


  async signUp(title: string, firstName: string, lastName: string, day: string, month: string, year: string, number: string, address: string, email: string, password: string): Promise<void> {
    await this.setTitle(title);
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.setDay(day);
    await this.setMonth(month);
    await this.setYear(year);
    await this.fillPhoneNumber(number);
    await this.fillHomeAddress(address);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.click(this.emailOption);
    await this.click(this.postOption);
    await this.click(this.phoneOption);
    await this.click(this.continueButton);
  }

  async setTitle(title: string): Promise<void> {
    await this.click(this.selectTitle);
    await this.select(this.selectTitle, title);
  }

  async fillFirstName(firstName: string): Promise<void>{
    await this.type(this.firstName, firstName)
  }

  async fillLastName(lastName: string): Promise<void>{
    await this.type(this.lastName, lastName)
  }

  async setDay(day: string): Promise<void> {
    await this.click(this.selectDay)
    await this.type(this.selectDay, day); // Use the 'type' method for input fields
  }

  // Method to select month
  async setMonth(month: string): Promise<void> {
    await this.click(this.selectMonth)
    await this.type(this.selectMonth, month);
  }

  // Method to select year
  async setYear(year: string): Promise<void> {
    await this.click(this.selectYear)
    await this.type(this.selectYear, year);
  }

  async fillPhoneNumber(number: string): Promise<void> {
    await this.type(this.phoneNumber, number);
  }

  async fillHomeAddress(address: string): Promise<void> {
    await this.type(this.homeAddress, address); // Type the address
    await this.page.waitForTimeout(5000)
    await this.click(this.selectFirstAddress);
  }
  

  async fillEmail(email: string): Promise<void> {
    await this.type(this.emailAddress, email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.type(this.password, password);
  }

  async verifyAccountCreated(){
    await expect(this.page.locator(this.accountCreated)).toBeVisible();
  }

}