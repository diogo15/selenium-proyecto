const params = require('../pageObjects/params');
const login_params = require('../pageObjects/login_params');
const { Builder, By, until } = require("selenium-webdriver");
const fillData = require('../pageObjects/fill_inputs');
let driver;

describe('Cases 10 - Eliminar Producto Carrito', function() {
    before(async function() {
        driver = await new Builder().forBrowser(params.browser).build();

        await driver.get(params.baseUrl);
    });
    
    it('Debería de eliminar un producto del carrito', async function() {
        await driver.findElement(By.className('btn-login')).click()
            .then(function () {
                fillData.fill_inputs(driver, login_params.data, params.login_submit);
            });

        await driver.get(params.baseUrl + '#/tienda');
        await driver.sleep(1000);

        await driver.wait(
            until.elementLocated(By.id('add_producto_1'))
        ).click();

        await driver.wait(until.elementLocated(By.id('btn_carrito'))).click();

        await driver.findElement(By.id('eliminar_product_1')).click();
    });

    /*after(async function () {
        await driver.quit();
    });*/
});