const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require('assert');

describe("Case 1 - Registro Usuario", function () {
  it("Debería de agregar un usuario exitosamente", async function () {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://intothezone.com");

    await driver.findElement(By.id("btn_carrito")).click();
    await driver.sleep(1000);

    await driver.findElement(By.linkText("Registro")).click();

    try {
      data = [
        "testcase1@testcase1.com",
        "TC1",
        "TC1",
        "20/03/2022",
        "9999-9999",
        123,
        123,
      ];

      let inputs = await driver.findElements(By.xpath("//input"));

      for (let iterator = 0; iterator < inputs.length; iterator++) {
        inputs[iterator].sendKeys(data[iterator]);

        await driver.sleep(300);

        console.log(data[iterator]);
      }

      await driver.sleep(3000);
      await driver.findElement(By.id("submit_signup_data")).click();

      let response = await driver.wait(until.elementLocated(By.id('signup_response')))
        .getText();

      assert.equal(await response, 'user added');

    } finally {
      await driver.quit();
    }
  });
});
