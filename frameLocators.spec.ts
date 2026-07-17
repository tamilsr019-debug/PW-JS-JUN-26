
import{test, expect} from '@playwright/test'

test.beforeEach( async ({page})=>{
    await page.goto("https://leafground.com/frame.xhtml");

})

test.afterEach(async ({page})=>{
    await page.close();
    console.log("Browser closed");
})

test("Hands on locators", async ({page})=>{

    //Interact with the Click Me button inside frame
    const frame = page.frameLocator('[src="default.xhtml"]');
    const button = frame.locator("#Click");
    await button.click();
    console.log("Clicked")

    //verify the button 
    await expect(button).toHaveText("Hurray! You Clicked Me.");

    //get the total count of the frames
    const totalFrames = page.frames().length;
    console.log("Total Frames: ", totalFrames);

    //interact with click me btn inside the nested frame
    const outerFrame = page.frameLocator('[src="page.xhtml"]'); //outer frame
    const innerFrame = outerFrame.frameLocator('[src="framebutton.xhtml"]'); //inner frame
    const clickButton = innerFrame.locator("#Click")
    await clickButton.click()

    //Assert the text changed after clicking the button
    await expect(clickButton).toHaveText("Hurray! You Clicked Me.");
    console.log(await clickButton.textContent());    
  
})
