const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require("assert");
const params = require("../pageObjects/params");
const fillData = require("../pageObjects/fill_inputs");
const login_data = require("../pageObjects/login_params");
let driver;

describe('Case 9 - Disminuir Carrito',function(){
  before(async function () {
    driver = new Builder().forBrowser(params.browser).build();

    await driver.get(params.baseUrl)
  });

  this.afterEach(async function () {
    await driver.sleep(1000);
  });

  it('Step 1: Iniciar Sesión', async function () {
    await driver.findElement(By.className('btn-login')).click();
    //importamos el login
    //await login.login(driver, params.defaultUser, params.defaultUserPass);
    await fillData.fill_inputs(driver, login_data.data, params.login_submit);
  });

  it('Step 2: Agregar Producto', async function () {
    await driver.get(params.baseUrl + '#/tienda');
    //Agregar al carrito
    await driver.wait(until.elementLocated(By.id("product_4"))).click();
    await driver.wait(
      until.elementLocated(By.className("button purple"))
    ).click();
  });

  it('Disminuir cantidad de productos del carrito', async function(){
    //Ingresar al carrito
    await driver
      .wait(until.elementLocated(By.className("btn-carrito")))
      .click();
    //Dar click al botón de  "-".  
    await driver.wait(until.elementLocated(By.className("btn_menos"))).click();
    let response = await driver.wait(until.elementLocated(By.id('emptyCart'))).getText();
    try{
        assert.equal(await response, 'Tu carrito esta vacio.....');
  
    }finally{
      await driver.quit();
    }
  });
});