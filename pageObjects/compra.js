const {By,until} = require("selenium-webdriver"); 

async function compra(ventana,id){
    await ventana.wait(until.elementLocated(By.id(id))).click();
    await ventana.wait(until.elementLocated(By.className("button purple"))).click();
    await ventana.wait(until.elementLocated(By.className("btn-carrito"))).click();
    await ventana.wait(until.elementLocated(By.className("button green"))).click();
    await ventana.wait(until.elementLocated(By.className("button green"))).click();
    await ventana.sleep(500);
    await ventana.findElement(By.className("button purple")).click();
}

module.exports = { compra };