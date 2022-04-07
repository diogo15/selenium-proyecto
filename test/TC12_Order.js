const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require("../pageObjects/login");
const compra = require("../pageObjects/compra");
var assert = require("assert");
var flag = new Boolean(false);
var detalles = "/html/body/div/div[2]/div/div[2]/table[1]/tbody";

describe("Case 12 - Detalle Pedidos", function () {
  it("Ver datalles de los pedidos realizados", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    //Precondiciones test case 12
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await login.login(driver, "asd@asd.com", "123");
    await driver.sleep(2500);
    //Realizar compra
    await compra.compra(driver, "product_4");
    //Test case 12
    //click historial de pedidos
    await driver.findElement(By.className("active btn-login")).click();
    // click ver detalles
    await driver.wait(until.elementLocated(By.className("button"))).click();
    flag = await driver
      .wait(until.elementLocated(By.xpath(detalles)))
      .isEnabled();
    try {
      assert.equal(flag, true);
    } finally {
      await driver.quit();
    }
  });
});
