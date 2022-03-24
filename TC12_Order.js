const {Builder,By,Key,until} = require("selenium-webdriver"); 
const by = require("selenium-webdriver/lib/by");

async function pedidos12(){
    let driver = await new Builder().forBrowser("firefox").build();
    // Precondiciones Test Case 12
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[2]/div")).click();
    await driver.findElement(By.xpath("/html/body/div/div[3]/div/form/input[1]")).sendKeys("asd@asd.com");
    await driver.findElement(By.xpath("/html/body/div/div[3]/div/form/input[2]")).sendKeys("123");
    await driver.findElement(By.xpath("/html/body/div/div[3]/div/form/button[1]")).click();
    await driver.sleep(2500);
    //Realizar compra
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div[2]/div/div/div[1]/div/button[2]"))).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[3]")).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div/div/button"))).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div/div/button[2]"))).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div/div/button[2]"))).click();

    //Test case 12
    //click historial de pedidos
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[2]/span/a")).click();
    // click ver detalles
    await driver.wait(until.elementLocated(By.xpath("/html/body/div/div[2]/div/div[2]/table[1]/thead/tr/th[4]/button"))).click();
}