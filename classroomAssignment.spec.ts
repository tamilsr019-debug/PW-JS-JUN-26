
import {test, expect}  from '@playwright/test'

test.beforeEach( async ({page})=>{ //set up

    await page.goto('https://leafground.com/input.xhtml') //naviagte the url
    const placeholderDisabled = page.locator('//input[@placeholder="Disabled"]') //located disabled web element
    await expect (placeholderDisabled).toBeDisabled();
    console.log("Disapled placeholder name is: " , await placeholderDisabled.getAttribute("placeholder") ); //print the placeholder name of disabled
    
    const enablePlaceholder = page.locator("//h5[text()='Click and Confirm Label Position Changes']/following::input[1]"); // Enable text field locator
    await expect (enablePlaceholder).toBeEnabled(); //Assertion of expect the enabled
    await enablePlaceholder.fill('Raji') //fill the values
    console.log('Enabled placeholder name is: ', await enablePlaceholder.getAttribute("placeholder")); //print the enable text box placeholder
    console.log('Enable input values :' , await enablePlaceholder.inputValue()); // print the entered values of enabled text box
    
});
test.afterEach (async ({page}) =>{
    await page.close()
    console.log("Browser closed");
});

test ('Soft Assertion method' , async ({page}) =>{
    const enablePlaceholder = page.locator("//h5[text()='Click and Confirm Label Position Changes']/following::input[1]")// using enable placeholder and function is disable
    await expect.soft(enablePlaceholder).toBeDisabled(); //soft assertion -continue the test, not stop.
    console.log("Step 1 is completed");
    await enablePlaceholder.fill("Playwright Learning");
    console.log("Step 2 is completed")
    console.log("Text entered after soft assertion.");
    await page.waitForTimeout(5000);
});