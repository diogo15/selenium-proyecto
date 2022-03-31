const { Builder, By, Key, until } = require("selenium-webdriver");
describe("Case 6 - Refrescar Productos", function () {
    it("Estancia de los productos despues de refrescar la pagina", async function () {
      let driver = await new Builder().forBrowser("chrome").build();
      //Precondiciones test case 6
      await driver.get("http://intothezone.com/#/tienda");
      //Inicio de sesion
      await driver.findElement(By.className("btn-login")).click();
      await driver
        .findElement(By.xpath("//*[@id='app']/div[3]/div/form/input[1]"))
        .sendKeys("asd@asd.com");
      await driver
        .findElement(By.xpath("//*[@id='app']/div[3]/div/form/input[2]"))
        .sendKeys("123");
      await driver.findElement(By.className("button green")).click();
      await driver.sleep(2500);
      //Test case 6
      //Agregar al carrito
      await driver.wait(until.elementLocated(By.id("product_4"))).click();
      await driver
        .wait(until.elementLocated(By.className("button purple")))
        .click();
      await driver
        .wait(until.elementLocated(By.className("btn-carrito")))
        .click();
      await driver.sleep(2000);
      //Resfresh
      await driver.navigate().refresh();
      await driver.close();
    });
  });
