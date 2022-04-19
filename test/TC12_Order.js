const { Builder, By, Key, until } = require("selenium-webdriver");
const compra = require("../pageObjects/compra");
const fillData = require('../pageObjects/fill_inputs');
const params = require('../pageObjects/params');
const login_data = require('../pageObjects/login_params');
var assert = require("assert");
var flag = new Boolean(false);
var detalles = "/html/body/div/div[2]/div/div[2]/table[1]/tbody";

describe("Case 12 - Detalle Pedidos", function () {
  it("Ver datalles de los pedidos realizados", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    //Precondiciones test case 12
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await driver.findElement(By.className('btn-login')).click();
    //await login.login(driver, params.defaultUser, params.defaultUserPass);
    await fillData.fill_inputs(driver, login_data.data, params.login_submit);
    await driver.sleep(2500);
    //Realizar compra
    await compra.compra(driver, "product_4");
    //Test case 12
    //click historial de pedidos
    await driver.findElement(By.className("active btn-login")).click();
    await driver.sleep(1000);
    // click ver detalles
    await driver.wait(until.elementLocated(By.className("button"))).click();
    await driver.sleep(1000);

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
