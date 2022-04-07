let driver  = require('selenium-webdriver'),
    By      = driver.By,
    until   = driver.until;

class Base_Page {
    constructor () {
        global.driver = driver;
        global.By = By;
        global.until = until;
    }

    driver = new driver.Builder().forBrowser('chrome').build();

    async close_instance () {
        this.driver.close();
    }

    async quit_instance () {
        this.driver.quit();
    }

    async get_into_URL (url) {
        this.driver.get(url)
    }

}

module.exports = { Base_Page }