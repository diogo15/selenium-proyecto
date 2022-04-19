const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require("../pageObjects/login");
const compra = require("../pageObjects/compra");
const fillData = require('../pageObjects/fill_inputs');
const params = require('../pageObjects/params');
const login_data = require('../pageObjects/login_params');
var assert = require("assert");
var flag = new Boolean(false);


describe("Case 13 - Historial Pedidos", function () {
  it("Ver historial de pedidos", async function () {
    // Precondiciones Test Case 13.
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await driver.findElement(By.className('btn-login')).click();
    //await login.login(driver, params.defaultUser, params.defaultUserPass);
    await fillData.fill_inputs(driver, login_data.data, params.login_submit);
    await driver.sleep(2500);
    //Realizar compra
    await compra.compra(driver, "product_1");
    //Test case 13
    //click historial de pedidos
    await driver.findElement(By.id("btn_login_Active")).click();
    await driver.sleep(2000);
    
    flag = await driver.wait(until.elementLocated(By.className('history'))).isEnabled();

    try{
      assert.equal(flag, true);
    }finally{
      await driver.quit();
    }
    
      
  });
});
