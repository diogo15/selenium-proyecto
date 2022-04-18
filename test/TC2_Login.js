const { Builder, By, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');
const params = require('../pageObjects/params');
const fillData = require('../pageObjects/fill_inputs');
const login_data = require('../pageObjects/login_params');
var assert = require("assert");
let driver;

// Test Case 2
describe("Test Case 2", function () {
  before(async function () {
    driver = await new Builder().forBrowser(params.browser).build();
    
    //Ingreso a la pagina
    await driver.get(params.baseUrl);
  });

  it('Debería de iniciar sesión al usuario exitosamente', async function () {
    
    await driver.findElement(By.className('btn-login')).click();
    //importamos el login
    //await login.login(driver, params.defaultUser, params.defaultUserPass);
    await fillData.fill_inputs(driver, login_data.data, params.login_submit);

    let response = await driver.wait(
      until.elementLocated(By.id('loginMessage'))
    ).getText().then(function (value) {
      return value;
    });
    
    assert.equal(response, 'Ingreso Exitoso!');

    await driver.close();
  });
});
