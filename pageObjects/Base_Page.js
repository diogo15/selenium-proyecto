let driver  = require('selenium-webdriver'),
    By      = driver.By,
    until   = driver.until;

const { browser } = require('./params');

class Base_Page {
    constructor () {
        global.driver = driver;
    }

    driver = new driver.Builder().forBrowser(browser).build();

    sleep (time) {
        this.driver.sleep(time);
    }

    close_instance () {
        this.driver.close();
    }

    quit_instance () {
        this.driver.quit();
    }

    get_into_URL (url) {
        this.driver.get(url)
    }

    click (element) {
        (element).click();
    }

    sendKeys (element, data) {
        (element).sendKeys(data);
    }

    get_text (element) {
        return (element).getText();
    }

    element_ID (locator) {
        return this.driver.findElement(By.id(locator));
    }

    element_ClassName (locator) {
        return this.driver.findElement(By.className(locator));
    }

    element_LinkText (locator) {
        return this.driver.findElement(By.linkText(locator));
    }

    element_XPath (locator) {
        return this.driver.findElement(By.xpath(locator));
    }

    elements_XPath (locator) {
        return this.driver.findElements(By.xpath(locator));
    }
    
    wait_element_appear_id (locator) {
        return this.driver.wait(until.elementLocated(By.id(locator)));
    }

    until_element_appear_lt (locator) {
        return this.driver.wait(until.elementLocated(By.linkText(locator)));
    }
    
    array_inputs (data, inputs) {
        try {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].sendKeys(data[i]);

                console.log(data[i]);
            }

        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = { Base_Page }