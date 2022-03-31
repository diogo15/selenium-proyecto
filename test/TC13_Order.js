const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');
const compra = require('../pageObjects/compra');

describe("Case 13 - Historial Pedidos", function () {
  it("Ver historial de pedidos", async function () {
    // Precondiciones Test Case 13.
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://intothezone.com/#/tienda");
    //Inicio de sesion
    await login.login(driver,"asd@asd.com","123")
    await driver.sleep(2500);
    //Realizar compra
    await compra.compra(driver,"product_4");
    //Test case 13
    //click historial de pedidos
    await driver.findElement(By.className("active btn-login")).click();
    await driver.close();
  });
});
