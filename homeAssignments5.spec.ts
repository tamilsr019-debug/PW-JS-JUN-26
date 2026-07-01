
import {test, chromium, firefox} from "@playwright/test"

test("Open the RedBus to Launch edge browser",async()=>{

         test.setTimeout(60000)
         
const edgebrowser = await chromium.launch({
    channel : 'msedge',
    headless : false
})
const edgecontext = await edgebrowser.newContext()
const edgepage = await edgecontext.newPage()

await edgepage.goto("https://www.redbus.in/")

const edgeurl = edgepage.url()
console.log(edgeurl)

const edgetitle = await edgepage.title()
console.log(edgetitle)

await edgebrowser.close()
});

test("Open the Flipkart to Launch firefox browser" , async ()=> {

    test.setTimeout(60000)

const flipkartbrowser = await firefox.launch({
    headless : false
})
const flipkartcontext = await flipkartbrowser.newContext()
const flipkartpage = await flipkartcontext.newPage()

await flipkartpage.goto("https://www.flipkart.com/")

const flipkarturl = flipkartpage.url()
console.log(flipkarturl)

const flipkarttitle = await flipkartpage.title()
console.log(flipkarttitle)

await flipkartbrowser.close()

});