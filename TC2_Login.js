const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Test case 2", function () {
  it("Inicio Sesion", async function () {
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
    await driver.quit();
  });
});
