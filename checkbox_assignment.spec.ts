import{test, expect} from '@playwright/test'

test.beforeEach( async ({page})=>{
    await page.goto("https://leafground.com/checkbox.xhtml");

})

test.afterEach(async ({page})=>{
    await page.close();
    console.log("Browser closed");
})

test("Hands on locators", async ({page})=>{
    const basicCheckbox = page.locator("//h5[text()='Basic Checkbox']/following::div[contains(@class,'ui-chkbox-box')][1]")
    await basicCheckbox.click();

        //Checkbox -message verification flow
    const basicMessage = page.locator("//div[contains(@class, 'ui-growl-message')]");
    await expect(basicMessage).toBeVisible();
    console.log("The checked message is displayed")

    const notificationCheckbox = page.locator("//h5[text()='Notification']/following::div[contains(@class,'ui-chkbox-box')][1]")
    await notificationCheckbox.click();

    //Checkbox - message verification flow
    const notificationMessage = page.locator("//div[contains(@class, 'ui-growl-message')]");
    await expect(notificationMessage).toBeVisible();
    console.log("The checked message is displayed")

    const language = page.locator("//h5[text()='Choose your favorite language(s)']/following::div[contains(@class, 'ui-chkbox-box')][3]")
    await language.click();

    const triState = page.locator("//h5[text()='Tri State Checkbox']/following::div[contains(@class, 'ui-chkbox-box')]")
    await triState.click();


    //verify the tristate assignment
    const triStateIcon = page.locator("(//h5[text()='Tri State Checkbox']/following::span[contains(@class,'ui-chkbox-icon')])[1]")
    const state = await triStateIcon.getAttribute("class");

    if (state != null){
        if (state?.includes("pi-check")){
        console.log("checked");
    }
    else if (state?.includes("pi-mins")){
        console.log("Indeterminate");
    }
    else {
        console.log("unchecked");
    }
}
})