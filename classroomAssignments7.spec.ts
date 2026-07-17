
import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) =>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
})

test.afterEach(async ({page})=> {
    await page.close();
    console.log("Browser closed");
})

test("Learn Alert and Frame Interactions", async ({page})=>{

//locate the iframe
const frame = page.frameLocator("#iframeResult");

//Event Listener
page.on('dialog', async (dialog:any)=>{
    
    console.log("Alert Message:", dialog.message());
    console.log("Alert Type", dialog.type());
    await dialog.accept();
})
//click 'Try it' button
await frame.locator("button").click();
//Stored the message in the variables of 'result' 
const result = frame.locator("#demo");
await expect(result).toHaveText("You pressed OK!")

console.log(await result.textContent());


})