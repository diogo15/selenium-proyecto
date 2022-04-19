const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require("assert");
const params = require("../pageObjects/params");
const fillData = require("../pageObjects/fill_inputs");
const login_data = require("../pageObjects/login_params");
const addCarrito = require("../pageObjects/add_to_cart");
let driver;

describe('Case 9 - Disminuir Carrito',function(){
  before(async function () {
    driver = new Builder().forBrowser(params.browser).build();

    await driver.get(params.baseUrl)
  });

  it('Disminuir cantidad de productos del carrito', async function(){
    await driver.findElement(By.className('btn-login')).click();
    //importamos el login
    //await login.login(driver, params.defaultUser, params.defaultUserPass);
    await fillData.fill_inputs(driver, login_data.data, params.login_submit);
  
    //Agregar al carrito
    await driver.get(params.baseUrl + "#/tienda")
      .then(function () {
        addCarrito.add_to_cart(driver);
      });
  
    //Dar click al botón de  "-".  
    await driver.wait(
      until.elementLocated(By.className("btn_menos"))
    ).click();
    
    let response = await driver.wait(until.elementLocated(By.id('emptyCart'))).getText();
    try{
        assert.equal(response, 'Tu carrito esta vacio.....');
  
    }finally{
      await driver.quit();
    }
  });
});