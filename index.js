const { Builder, By, until, assert } = require("selenium-webdriver");

async function initQA() {
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://intothezone.com/")

    const element = driver.findElement(By.id('link_fb'));

    if(await element.getAttribute("href") == "http://fb.com/"){
        console.log("APPROVED: 1. Facebook Link Check");
    }else{
        console.log("REJECTED: 1. Facebook Link Check");
    }
   

    //el.click();

    driver.quit();

}

initQA();