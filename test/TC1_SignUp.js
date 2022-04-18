const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require('assert');
const signup_params = require("../pageObjects/signup_params");
const params = require("../pageObjects/params");

const fillData = require('../pageObjects/fill_inputs');
let driver;

describe("Case 1 - Registro Usuario", function () {
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(params.baseUrl);
  });

  it("Debería de agregar un usuario exitosamente", async function () {
    await driver.findElement(By.id("btn_carrito")).click();
    await driver.wait(until.elementLocated(By.linkText('Registro'))).click();

    await fillData.fill_inputs(driver, signup_params.data, signup_params.signup_BTN);

    let response = await driver.wait(
      until.elementLocated(By.id('signup_response'))
    ).getText().then(function (value) {
      return value;
    });

    assert.equal(response, 'user added');

    await driver.quit();

  });
});
