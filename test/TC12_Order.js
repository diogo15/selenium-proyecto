const {Builder,By,Key,until} = require("selenium-webdriver"); 
const login = require('../pageObjects/login');
const compra = require('../pageObjects/compra');

describe('Case 12 - Detalle Pedidos',function(){
    it('Ver datalles de los pedidos realizados', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        //Precondiciones test case 12
        await driver.get("http://intothezone.com/#/tienda");
        //Inicio de sesion
        await login.login(driver,"asd@asd.com","123")
        await driver.sleep(2500);
        //Realizar compra
        await compra.compra(driver,"product_4");
        //Test case 12
        //click historial de pedidos
        await driver.findElement(By.className("active btn-login")).click();
        // click ver detalles
       await driver.wait(until.elementLocated(By.className("button"))).click();
       await driver.close();  
    });  
});