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

    it('Step 1: Iniciar Sesión', async function () {
        await fillData.fill_inputs(driver, login_params.data);
    });


    it('Step 2: Agregar Producto', async function () {
        await driver.get(params.baseUrl + '#/tienda');
        
        await driver.wait(until.elementLocated(By.id('add_producto_1'))).click();
    });

    it('Debería de eliminar un producto del carrito', async function() {
        await driver.findElement(By.id('btn_carrito')).click();

        await driver.findElement(By.id('eliminar_product_1')).click();
    });

    after(async function () {
        await driver.quit();
    });
});