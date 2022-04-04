const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');
var assert = require("assert");
const params = require("../pageObjects/params");

describe('Case 9 - Disminuir Carrito',function(){
    it('Disminuir cantidad de productos del carrito', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        // Precondiciones Test Case#9
        await driver.get("http://intothezone.com/#/tienda");
        //Inicio de sesion
        await login.login(driver,params.defaultUser,params.defaultUserPass)
        await driver.sleep(2500);
        //Agregar al carrito
        await driver.wait(until.elementLocated(By.id("product_4"))).click();
        await driver
          .wait(until.elementLocated(By.className("button purple")))
          .click();
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