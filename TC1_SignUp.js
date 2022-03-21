const {Builder, By, Key, until} = require('selenium-webdriver');

(async function TC1_SignUp() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://intothezone.com');

  await driver.findElement(By.id('btn_carrito')).click();
  await driver.sleep(1000);

  await driver.findElement(By.linkText('Registro')).click();

  try {
    data = ['testcase1@testcase1.com', 
            'TC1', 
            'TC1', 
            '20/03/2022', 
            '9999-9999', 
            123, 
            123];

    let inputs = await driver.findElements(By.xpath('//input'));

    for (let iterator = 0; iterator < inputs.length; iterator++) {
      inputs[iterator].sendKeys(data[iterator]);

      await driver.sleep(300);
      
      console.log(data[iterator]);
    }

    await driver.sleep(3000);
    await driver.findElement(By.id('submit_signup_data')).click();

    let response = await driver.wait(until.elementLocated(By.id('signup_response'))).getText();

    if (await response == "user added") {
      console.log("PASS " + response);
    }else {
      console.log("REJECTED " + response);
    }

  } finally {
    

    await driver.quit();
  
  }

})();