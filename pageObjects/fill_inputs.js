const { By } = require("selenium-webdriver");
const params = require("./params");

async function fill_inputs (driver, data, btn_id) {
    let inputs = await driver.findElements(By.xpath("//input"));

    for (let iterator = 0; iterator < inputs.length; iterator++) {
      inputs[iterator].sendKeys(data[iterator]);
    }

    await driver.findElement(By.id(btn_id)).click();
}

module.exports = { fill_inputs }