const {Builder, By, Key, until} = require('selenium-webdriver');

(async function TC4_IsActive () {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://intothezone.com');
    await driver.sleep(1000);

    await driver.findElement(By.linkText('Tienda')).click();
    await driver.sleep(1000);

    await driver.findElement(until.elementLocated(By.linkText('Tienda')));
    await driver.sleep(2000);

    await driver.quit();
})();