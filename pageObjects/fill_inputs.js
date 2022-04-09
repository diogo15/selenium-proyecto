const { By } = require("selenium-webdriver");
const params = require("./params");

async function fill_inputs (driver, data) {
    await driver.findElement(By.className('btn-login')).click();

    var inputs = await driver.findElements(By.xpath('//input'));

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].sendKeys(data[i]);
    }

    await driver.findElement(By.id('loginInit')).click();
}

module.exports = { fill_inputs }