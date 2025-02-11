import { expect } from 'playwright/test';
import { LogInPage } from './LoginPage';

export class AddProductPage extends LogInPage{
    
    private dressesTab = '//li/a/span[text()="Dresses"]';
    private selectDress = "[data-product-number='1']";
    private addToBag = "[aria-label='add to bag']";
    private selectSize = "[aria-label='20']";
    private goToBag = "a#GoToBagPDP";
    private addedToBag = "//h3[text()='Added to bag!']"
    private goToCheckout = "[aria-label='Go to checkout']";
    private continueToPayment = "#paymentButton";
    private clickApplyNow = "[aria-label='Place order']";
    private bagItem = '[data-cy="bag-item"]'
    private errorNotification = '[data-testid="notification-content"]'

    

    async addItems(): Promise<void>{
        await expect(this.page.locator(this.dressesTab)).toBeVisible()
        await this.click(this.dressesTab);
        await this.click(this.selectDress);
        await this.click(this.addToBag);
        await this.click(this.selectSize);
        await expect(this.page.locator(this.addedToBag)).toBeVisible()
        await this.click(this.goToBag);
        await this.click(this.goToCheckout);
        await this.click(this.continueToPayment);
        await this.click(this.clickApplyNow);
    }

}
