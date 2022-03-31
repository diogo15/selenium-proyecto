const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');

describe("Case 13 - Historial Pedidos", function () {
  it("Ver historial de pedidos", async function () {
    // Precondiciones Test Case 13.
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await login.login(driver,"asd@asd.com","123")
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
    await driver.close();
  });
});
