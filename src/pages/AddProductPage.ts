import { LogInPage } from './LoginPage';

export class AddProductPage extends LogInPage{
    
    private dressesTab = '(//span[text()="Dresses"])[2]';
    private selectDress = ".ProductCard_title__nIU_H";
    private addToBag = "(//button[@aria-label='add to bag'])[1]";
    private selectSize = "(//button[@aria-label='20'])[1]";
    private goToBag = "(//a[@id='GoToBagPDP'])[1]";
    private goToCheckout = "(//button[@class='Button Button_success Button_fullWidth'])[1]";
    private continueToPayment = "(//button[@id='paymentButton'])[1]";
    private clickApplyNow = "(//a[@id='startcreditapplication'])[1]";
    private clickApply = "(//button[@id='creditapplicationapply'])[1]";

    async addItems(): Promise<void>{
        await this.click(this.dressesTab);
        await this.page.locator(this.selectDress).nth(0).click();
        await this.click(this.addToBag);
        await this.click(this.selectSize);
        await this.click(this.goToBag);
        await this.click(this.goToCheckout);
        await this.click(this.continueToPayment);
        await this.click(this.clickApplyNow);
        await this.click(this.clickApply);
    }

}
