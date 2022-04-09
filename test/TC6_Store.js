const { Builder, By, until } = require("selenium-webdriver");
const fillData = require('../pageObjects/fill_inputs');
var flag = new Boolean(false);
var assert = require("assert");
const login_params = require("../pageObjects/login_params");
const params = require("../pageObjects/params");
let driver;

describe("Case 6 - Refrescar Productos", function () {
  before(async function () {
    driver = await new Builder().forBrowser(params.browser).build();
    
    await driver.get(params.baseUrl + "#/tienda");
  });

  it('Step 1: Iniciar Sesión', async function () {
    await fillData.fill_inputs(driver, login_params.data);
    await driver.sleep(1000);
  });

  it('Estancia de los productos despues de refrescar la pagina', async function () {
    //Test case 6
    //Agregar al carrito
    await driver.findElement(By.id('add_producto_1')).click();

    await driver.findElement(By.id('btn-carrito')).click();
    await driver.sleep(1000);


    //Resfresh
    await driver.navigate().refresh();
  });

  after(async function () {
    try {
      flag = await driver.wait(until.elementLocated(By.id('emptyCart'))).isEnabled();
    } catch (error) {
      console.error(error);
    }  

    assert.equal(flag,false);
    await driver.close();
  });
});
