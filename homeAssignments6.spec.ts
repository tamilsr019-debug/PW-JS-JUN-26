
import {test} from '@playwright/test'

test.beforeEach (async({page})=>{
    //Setup
    await page.goto("https://leaftaps.com/")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    
    console.log("Setup Completed")
});

test.afterEach (async({page})=>{
    //teardown
    await page.close()
    console.log("Browser closed");
});
test("Lanuch the leaftaps" , async ({page}) => {

    await page.locator("//a[contains(text(),'CRM')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill("Datamoo.ai")
    await page.locator("#createLeadForm_firstName").fill("Raji")
    await page.locator("#createLeadForm_lastName").fill("Suresh")

    await page.locator("#createLeadForm_personalTitle").fill("Mrs.")
    await page.locator("#createLeadForm_generalProfTitle").fill("New Lead")
    await page.locator("#createLeadForm_annualRevenue").fill("4000000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("8695206023")
    await page.locator(".smallSubmit").click()

    const title = await page.title()
    console.log(title)
    await page.waitForTimeout(6000);

});