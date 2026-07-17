
import{test, expect} from '@playwright/test'

test.beforeEach( async ({page})=>{
    await page.goto("https://leafground.com/select.xhtml");

})

test.afterEach(async ({page})=>{
    await page.close();
    console.log("Browser closed");
})

test("Hands on locators", async ({page})=>{
    //print the dropdown values count
    const favdropdown = page.locator("//h5[text()='Which is your favorite UI Automation tool?']/following::select[contains(@class, 'ui-selectonemenu')]")
    const favdropdownCount = await favdropdown.count();

    for (let index = 1; index <= favdropdownCount; index++){
        console.log(
            await page.locator(`(//h5[text()='Which is your favorite UI Automation tool?']/following::select[contains(@class, 'ui-selectonemenu')][${index}])`).innerText()
        );
    }

    //choose preferred country
    const countryDrpdwn = page.locator("//h5[text()='Choose your preferred country.']/following::div[contains(@id,'country')][1]")
    await countryDrpdwn.click();

    //select the India
    await page.locator("//li[normalize-space()='India']").click()
    console.log ("Selected the perfer country of India");

    //Confirm the cities belongs to the country loaded
    const citiesOption = page.locator("//h5[text()='Confirm Cities belongs to Country is loaded']/following::div[contains(@id,'city')][1]")
    const cities = await citiesOption.allTextContents() // it useful to print the values and verify the citynames loaded for the selected countries
    console.log("Cities are loaded", cities)

    //Select any three courses
    const courseValue = page.locator("//button[contains(@class,'ui-button')]");

    const courseIndexes = [2, 3, 4];

    for (const index of courseIndexes) {
        await courseValue.click();
        await courseValue.click();
        await courseValue.waitFor({state: 'visible'});
        await page.locator(
            `(//li[contains(@class,'ui-autocomplete-item ui-autocomplete-list-item ui-corner-all')])[${index}]`
        ).click();
    }

    console.log("Selected the three values");
    
    // //enter the value one by one
    // await page.locator("//li[contains(@class, 'ui-autocomplete-item ui-autocomplete-list-item ui-corner-all')][2]").click();
    // await page.locator("//li[contains(@class, 'ui-autocomplete-item ui-autocomplete-list-item ui-corner-all')][3]").click();
    // await page.locator("//li[contains(@class, 'ui-autocomplete-item ui-autocomplete-list-item ui-corner-all')][5]").click();

    //select the language
    const languagedrpdwn =  page.locator("//h5[text()='Choose language randomly']/following::label[1]")
    await languagedrpdwn.click()
    await languagedrpdwn.click()
    const languages = page.locator("//li[contains(@class,'ui-selectonemenu-item')]");
    const languageCount = await languages.count();
    for (let index = 1; index <= languageCount; index++){
        console.log(
            await page.locator(`(//li[contains(@class,'ui-selectonemenu-item')])[${index}]`).innerText()
        )}
    console.log("Printed the All Languages");

    //select 'Two irrespective of the language'
    await page.locator("//h5[contains(text(),'Two')]").click()
    console.log("There is no values in the dropdown")

})  