const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');
var flag = new Boolean(false);
var assert = require("assert");

describe("Case 6 - Refrescar Productos", function () {
    it("Estancia de los productos despues de refrescar la pagina", async function () {
      let driver = await new Builder().forBrowser("chrome").build();
      //Precondiciones test case 6
      await driver.get("http://intothezone.com/#/tienda");
      //Inicio de sesion
      await login.login(driver,"asd@asd.com","123")
      await driver.sleep(2500);
      //Test case 6
      //Agregar al carrito
      await driver.wait(until.elementLocated(By.id("product_4"))).click();
      await driver
        .wait(until.elementLocated(By.className("button purple")))
        .click();
      await driver
        .wait(until.elementLocated(By.className("btn-carrito")))
        .click();
      await driver.sleep(2000);
      //Resfresh
      await driver.navigate().refresh();
      try {
        flag = await driver.wait(until.elementLocated(By.id('emptyCart'))).isEnabled();
      } catch (error) {
        
      }  
      assert.equal(flag,false);
      await driver.close();
      
    });
  });
