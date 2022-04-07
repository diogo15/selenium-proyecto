const { Builder, Key,By, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');
const params = require('../pageObjects/params');
var assert = require("assert");

// Test Case 2
describe("Test Case 2", function () {
  it("Inicio Sesion", async function () {
    
    let driver = await new Builder().forBrowser("chrome").build();
    //Ingreso a la pagina
    await driver.get(params.baseUrl);
    
    //importamos el login
    await login.login(driver, params.defaultUser, params.defaultUserPass)

    let response = await driver.wait(until.elementLocated(By.id('loginMessage'))).getText();

    try{

      assert.equal(await response, 'Ingreso Exitoso!');

    }finally{
      await driver.quit();
    }

  });
});
