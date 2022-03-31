const { Builder, Key,By, until } = require("selenium-webdriver");
const login = require('../pageObjects/login');
var assert = require("assert");

<<<<<<< HEAD
describe("Case 2 - Inicio de Sesión", function () {
  it("Debería de iniciar sesión al usuario correctamente", async function () {
    // Test Case 2
    let driver = await new Builder().forBrowser("chrome").build();
    //Ingreso a la pagina
    await driver.get("http://intothezone.com/#/");
    //Click al perfil
    await driver.findElement(By.className("btn-login")).click();
    //Rellenar campo de correo y contraseña
    await driver
      .findElement(By.xpath("//*[@id='app']/div[3]/div/form/input[1]"))
      .sendKeys("asd@asd.com");
    await driver
      .findElement(By.xpath("//*[@id='app']/div[3]/div/form/input[2]"))
      .sendKeys("123");
    //Click en iniciar sesion
    await driver.findElement(By.className("button green")).click();
    await driver.close();
=======
// Test Case 2
describe("Test Case 2", function () {
  it("Inicio Sesion", async function () {
    
    let driver = await new Builder().forBrowser("chrome").build();
    //Ingreso a la pagina
    await driver.get("http://intothezone.com/#/");
    
    //importamos el login
    await login.login(driver,"asd@asd.com","123")

    let response = await driver.wait(until.elementLocated(By.id('loginMessage'))).getText();

    try{

      assert.equal(await response, 'Ingreso Exitoso!');

    }finally{
      await driver.quit();
    }

>>>>>>> af8994a254acc56a60a2aaeea9f0a1ab687e4a6d
  });
});
