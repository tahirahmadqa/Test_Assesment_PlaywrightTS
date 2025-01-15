import { BasePage } from './BasePage';

export class SignUpPage extends BasePage {
  
  // Other signup methods as before...
  private acceptCookiesButton = "(//button[normalize-space()='Accept All Cookies'])[1]";
  private profileIconButton = "(//button[@type='button'])[63]";
  private newCustomerOption = '(//a[normalize-space()="I\'m a new customer"])[1]';
  private selectTitle = "(//select[@id='salutation'])[1]";
  private firstName = "(//input[@id='firstName'])[1]";
  private lastName = "(//input[@id='lastName'])[1]";
  private selectDay = "(//input[@id='day'])[1]";
  private selectMonth = "(//input[@id='month'])[1]";
  private selectYear = "(//input[@id='year'])[1]";
  private phoneNumber = "(//input[@id='phoneNumber'])[1]";
  private homeAddress = "(//input[@id='address'])[1]";
  private selectFirstAddress = "(//div[@id='GB|RM|A|15548301|A2|ENG'])[1]";
  private emailAddress = "(//input[@id='email'])[1]";
  private password = "(//input[@id='password'])[1]";
  private emailOption = "(//input[@id='emailOptIn'])[1]";
  private postOption = "(//input[@id='postOptIn'])[1]";
  private phoneOption = "(//input[@id='phoneOptIn'])[1]";
  private continueButton = "(//button[normalize-space()='Continue'])[1]";


  async navigateToSignUpPage(): Promise<void> {
    await this.click(this.acceptCookiesButton);
    await this.click(this.profileIconButton);
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

}