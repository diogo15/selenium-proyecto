const { Builder, By, until } = require("selenium-webdriver");
var assert = require("assert");
const ss = require("../pageObjects/screenshot");
let driver;

describe("Test Case 3", function () {

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it("Deberia ir a la pagina de facebook", async function () {

    await driver.get("http://intothezone.com/");

    const element = driver.findElement(By.id("link_fb"));
    assert.equal(await element.getAttribute("href"), "http://fb.com/");

    await ss.screenshot(driver, "TC3_01");
  });

  it("Deberia abrir correo", async function () {

    await driver.get("http://intothezone.com/");

    const element = driver.findElement(By.id("link_mailto"));
    assert.equal(await element.getAttribute("href"), "mailto:intothezone@gmaill.com");

  });

  it("Deberia abrir llamada de telefono", async function () {

    await driver.get("http://intothezone.com/");

    const element = driver.findElement(By.id("link_tel"));
    assert.equal(await element.getAttribute("href"), "tel:50622456432");

  });

  after(async function() {
    await driver.close();
  });

});
