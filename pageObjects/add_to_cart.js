const { By, until } = require("selenium-webdriver");


async function add_to_cart(driver) {

    await driver.wait(
        until.elementLocated(By.id("add_producto_1"))
    ).click();

    await driver.wait(
        until.elementLocated(By.id("btn_carrito"))
    ).click();

}

module.exports = { add_to_cart }