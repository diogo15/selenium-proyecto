const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require('assert');
const signup_params = require("../pageObjects/signup_params");
const params = require("../pageObjects/params");
let driver;

describe("Case 1 - Registro Usuario", function () {
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(params.baseUrl);
  });

  it("Debería de agregar un usuario exitosamente", async function () {
    await driver.findElement(By.id("btn_carrito")).click();
    await driver.wait(until.elementLocated(By.linkText('Registro'))).click();

    let inputs = await driver.findElements(By.xpath("//input"));

    for (let iterator = 0; iterator < inputs.length; iterator++) {
      inputs[iterator].sendKeys(signup_params.data[iterator]);
    }

    await driver.findElement(By.id('submit_signup_data')).click();

    let response = await driver.wait(
      until.elementLocated(By.id('signup_response'))
    ).getText().then(function (value) {
      return value;
    });

    assert.equal(response, 'user added');

    await driver.quit();

  });
});
