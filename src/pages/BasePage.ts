import { Page } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export class BasePage {
  private baseURL: string;

  constructor(protected page: Page) {
    // Get baseURL from the .env file
    this.baseURL = process.env.BASE_URL || '';
  }

  async select(selector: string, value: string): Promise<void> {
    await this.page.selectOption(selector, value);
  }
  // Navigate to a URL relative to the baseURL
  async navigateTo(path: string): Promise<void> {
    const url = `${this.baseURL}${path}`; // Combine baseURL with the path
    await this.page.goto(url);
  }

  // Other methods remain unchanged
  async waitForUrlContains(expectedPart: string): Promise<void> {
    await this.page.waitForURL((url) => url.toString().includes(expectedPart));
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async click(selector: string): Promise<void> {
    await this.page.locator(selector).nth(0).click();
  }

  async type(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }
}
