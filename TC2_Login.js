const {Builder,By,Key,until} = require("selenium-webdriver"); 
const by = require("selenium-webdriver/lib/by");

async function inicioSesion2(){
    // Test Case 2
    let driver = await new Builder().forBrowser("firefox").build();
    //Ingreso a la pagina
    await driver.get("http://intothezone.com/#/");
    //Click al perfil
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[2]/div")).click();
    await driver.sleep(1000);
    await driver.takeScreenshot().then(
        function(image) {
            require('fs').writeFileSync('ClickPerfil.png', image, 'base64');
        }
    );
    await driver.sleep(100);
    //Rellenar campo de correo y contraseña
    await driver.findElement(By.xpath("/html/body/div/div[3]/div/form/input[1]")).sendKeys("asd@asd.com");
    await driver.findElement(By.xpath("/html/body/div/div[3]/div/form/input[2]")).sendKeys("123");
    await driver.sleep(1000);
    await driver.takeScreenshot().then(
        function(image) {
            require('fs').writeFileSync('RellenarCampos.png', image, 'base64');
        }
    );
    await driver.sleep(100);
    //Click en iniciar sesion 
    await driver.findElement(By.xpath("/html/body/div/div[3]/div/form/button[1]")).click();
    await driver.sleep(2500);
    await driver.takeScreenshot().then(
        function(image) {
            require('fs').writeFileSync('InicioSesion.png', image, 'base64');
        }
    );    
}