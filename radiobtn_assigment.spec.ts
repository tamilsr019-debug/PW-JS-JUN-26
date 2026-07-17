
import{test, expect} from '@playwright/test'

test.beforeEach( async ({page})=>{
    await page.goto("https://leafground.com/radio.xhtml");

})

test.afterEach(async ({page})=>{
    await page.close();
    console.log("Browser closed");
})

test("Learn the Radio button functionality", async ({page})=>{
    const card = page.locator("//div[contains(@class,'card')]")
    
    const cardCount = await card.count();
    

    for (let j = 0; j < cardCount; j++) {

    const radioButtons = card.nth(j).locator("xpath=.//div[contains(@class,'ui-radiobutton')]"); //used nested locator

    const radioCount = await radioButtons.count();

    for (let i = 0; i < radioCount; i++) {

        const classValue = await radioButtons.nth(i).getAttribute("class");
        const isSelected = classValue?.includes("ui-state-active");

        console.log("Card", j + 1, "Radio", i + 1, "selected:", isSelected);

        if (isSelected){
            expect(isSelected).toBeTruthy();
        }else{
            expect(isSelected).toBeFalsy();
        }
        // if (classValue?.includes("ui-state-active")) {
        //     console.log("Card", j + 1, "Radio", i + 1, "is selected");
        //     isSelected = true;
        // } else {
        //     console.log("Card", j + 1, "Radio", i + 1, "is not selected");
        // }
    }
}

//select the favourable browser
const favourBrowser = page.locator("//h5[text()='Your most favorite browser']/following::div[contains(@class, 'ui-radiobutton')][1]")
await favourBrowser.click();

//assert the selected radio is enabled
expect(favourBrowser).toBeEnabled();
console.log("Selected browser is enabled")

//Click the any one cities
await page.locator("//h5[text()='UnSelectable']/following::div[contains(@class, 'ui-radiobutton')][3]").click();
console.log("Selected Bengaluru Cities");

//Select age group
await page.locator("//h5[text()='Select the age group (only if not selected)']/following::label[1]").click()
console.log("Selected the age group");
// assert the default selected radio
const ageGroupCard = card.nth(3);

//find the selected radio
const selectedRadio = ageGroupCard.locator("xpath=.//div[contains(@class,'ui-radiobutton')and contains (@class, 'ui-state-active')]");
//assert the selected radio
expect(selectedRadio).toBeVisible();
console.log("Default selected age group is visible")
})
