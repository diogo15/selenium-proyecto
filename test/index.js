const { Builder, By, until } = require("selenium-webdriver");
var assert = require("assert");

async function initQA() {
    
    describe('Case Redes Sociales', function () {
        describe('#Registro()', function () {
            
            it('Deberia ir a la pagina de facebook', async function () {

                let driver = await new Builder().forBrowser("chrome").build();                
                await driver.get("http://intothezone.com/")

                
                const element = driver.findElement(By.id('link_fb'));
                assert.equal(await element.getAttribute("href"), 'http://fb.com/');

                await driver.quit();

            });

        });
    });


}



initQA();