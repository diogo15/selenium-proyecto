const { Builder, By, Key, until } = require("selenium-webdriver");
const login = require("../pageObjects/login");
const compra = require("../pageObjects/compra");
var assert = require("assert");
var flag = new Boolean(false);
var detalles = "/html/body/div/div[2]/div/div[2]/table[1]/tbody";
let driver;

describe("Case 12 - Detalle Pedidos", function () {
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it('Ingreso e inicio de sesión', async function () {
    //Precondiciones test case 12
    await driver.get("http://intothezone.com/#/tienda");

    //Inicio de sesion
    await login.login(driver, "asd@asd.com", "123");
    await driver.sleep(2500);
  });
});
