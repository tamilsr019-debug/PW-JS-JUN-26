
import{test} from '@playwright/test'

test.beforeEach (async({page}) => { //setup
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

});

test.afterEach (async({page}) =>{
    await page.close() //tear down
    console.log("Browser Closed");
});

test ("Get to print the Industry Dropdown Options", async ({page}) => {

    await page.locator("//a[contains(text(),'CRM')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("//select[@id='createLeadForm_industryEnumId']").click() // This is the industry dropdown. I want to print the all values

    const dropdownValues = page.locator('//select[@id="createLeadForm_industryEnumId"]/option')
    const dropdownCount = await dropdownValues.count();

    for (let index = 1; index <= dropdownCount; index++) {
    console.log(
        await page.locator(`(//select[@id="createLeadForm_industryEnumId"]/option)[${index}]`).innerText()
        );
    } 
            
}); 
