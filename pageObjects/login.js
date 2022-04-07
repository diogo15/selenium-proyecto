const { By } = require("selenium-webdriver");
const params = require('../pageObjects/params');

async function login(ventana,usuario,contrasena){

    await ventana.findElement(By.className("btn-login")).click();
    
    //Rellenar campo de correo y contraseña
    await ventana
      .findElement(By.id(params.user_TF))
      .sendKeys(usuario);
    await ventana
      .findElement(By.id(params.pass_TF))
      .sendKeys(contrasena);
      
    //Click en iniciar sesion
    await ventana.findElement(By.id(params.login_BTN)).click();
}

module.exports = { login };