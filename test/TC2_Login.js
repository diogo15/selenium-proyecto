const { Builder, By, until } = require("selenium-webdriver");
const fillData = require('../pageObjects/fill_inputs');
const params = require('../pageObjects/params');
const login_params = require("../pageObjects/login_params");
var assert = require("assert");
let driver;

// Test Case 2
describe("Test Case 2", function () {
  before(async function () {
    driver = await new Builder().forBrowser(params.browser).build();
  });

  it('Debería de iniciar sesión al usuario exitosamente', async function () {
    //Ingreso a la pagina
    await driver.get(params.baseUrl);
    
    //importamos el login
    await fillData.fill_inputs(driver, login_params.data);
  });

  after(async function () {
    let response = await driver.wait(
      until.elementLocated(By.id('loginMessage'))
    ).getText();
    
    assert.equal(response, 'Ingreso Exitoso!');

    await driver.close();
  });
});
