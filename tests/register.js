import regLocators from '../tests/regLocators.json';
import testdata from '../tests/testdata.json'
const{test,expect}=require("@playwright/test");

export class Register{
  
  constructor(page){
    this.page=page;
  }
  async gotoNopCommerce()
  {
    await this.page.goto('/');
    await expect.soft(this.page).toHaveTitle('nopCommerce demo store');
  }
  async clickOnRegBtn(){
    await this.page.locator(regLocators.register.registerBtn).click();
  }
  async selectGender(){
     await this.page.locator(regLocators.register.gender_female).check();
     await expect(this.page.locator(regLocators.register.gender_female)).toBeChecked();
     await expect(this.page.locator(regLocators.register.gender_male)).not.toBeChecked();
    
  }
  async selectName(){
     await this.page.locator(regLocators.register.first_name).fill(testdata.fname);
     await this.page.locator(regLocators.register.last_name).fill(testdata.lname);
     await this.page.waitForTimeout(2000);
  }
  async selectDOB(){
    await this.page.locator(regLocators.register.DOB_date).selectOption({value:testdata.date});
    await this.page.locator(regLocators.register.DOB_month).selectOption(testdata.month);
    await this.page.locator(regLocators.register.DOB_year).selectOption({value:testdata.year});
    await this.page.waitForTimeout(3000);
  }

}