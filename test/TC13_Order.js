const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Test case 13", function () {
  it("Ver historial de pedidos", async function () {
    // Precondiciones Test Case 13.
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await driver.findElement(By.className("btn-login")).click();
    await driver
      .findElement(By.xpath("//*[@id='app']/div[3]/div/form/input[1]"))
      .sendKeys("asd@asd.com");
    await driver
      .findElement(By.xpath("//*[@id='app']/div[3]/div/form/input[2]"))
      .sendKeys("123");
    await driver.findElement(By.className("button green")).click();
    await driver.sleep(2500);
    //Realizar compra
    await driver.wait(until.elementLocated(By.id("product_4"))).click();
    await driver
      .wait(until.elementLocated(By.className("button purple")))
      .click();
    await driver
      .wait(until.elementLocated(By.className("btn-carrito")))
      .click();
    await driver
      .wait(until.elementLocated(By.className("button green")))
      .click();
    await driver
      .wait(until.elementLocated(By.className("button green")))
      .click();
    await driver.sleep(500);
    await driver.findElement(By.className("button purple")).click();
    //Test case 13
    //click historial de pedidos
    await driver.findElement(By.className("active btn-login")).click();
    await driver.quit();
  });
});