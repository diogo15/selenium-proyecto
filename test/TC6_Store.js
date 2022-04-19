const { Builder, By, until } = require("selenium-webdriver");
const fillData = require("../pageObjects/fill_inputs");
const addCarrito = require('../pageObjects/add_to_cart');
const login_params = require("../pageObjects/login_params");
const params = require("../pageObjects/params");

var assert = require("assert");

var flag = new Boolean(false);
let driver;

describe("Case 6 - Refrescar Productos", function () {
  before(async function () {
    driver = await new Builder().forBrowser(params.browser).build();

    await driver.get(params.baseUrl);
  });

  it("Debería de mantener los productos en el carrito después de refrescar", async function () {
    await driver
      .findElement(By.className("btn-login"))
      .click();

      await fillData.fill_inputs(driver, login_params.data, params.login_submit);

    await driver.sleep(2000);
    await driver.get(params.baseUrl + "#/tienda")
      .then(function () {
        addCarrito.add_to_cart(driver);
      });

    //Resfresh
    await driver.navigate().refresh();

    try {
      flag = await driver
        .wait(until.elementLocated(By.id("emptyCart")))
        .isEnabled();
    } catch (error) {
      console.error(error);
    }

    assert.equal(flag, false);
    await driver.quit();
  });
});
