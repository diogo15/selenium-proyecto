const {Builder,By,Key,until} = require("selenium-webdriver"); 
const by = require("selenium-webdriver/lib/by");

async function tienda6(){
    //Test case 6.
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://intothezone.com/#/");
    //Click para ingresar en el apartado tienda
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[1]/a")).click();
    //Click ver producto
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div[2]/div/div/div[1]/div/button[1]/a"))).click();
    //Click en alguna categoria de producto
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div/div/div[2]/p[4]/button/a"))).click();

}