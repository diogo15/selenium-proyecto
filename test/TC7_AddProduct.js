const { Builder, By, until } = require("selenium-webdriver");
var assert = require("assert");
const ss = require("../pageObjects/screenshot");
const params = require('../pageObjects/params');
let driver;

describe("Case 7 - Agregar Producto", function () {

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it("Agregar productos al carrito", async function () {

    this.timeout(10000);

    var max = Math.floor(Math.random() * (4 - 1)) + 1;

    await driver.get(params.baseUrl+"#/tienda");

    var pendingProducts = driver.findElements(By.className('product'))

    await pendingProducts.then(function (products) {

        if(max < products.length){

          for(var i=0;i < max; i++){
            products[i].findElement(By.className("agregar_carrito")).click();
          }

        }

    });

    var quantity = await driver.wait(until.elementLocated(By.id('cart-quantity')));

    assert.equal(max, await quantity.getText());    

  });

  after(async function() {
    await driver.quit();
  });

});
