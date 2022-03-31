const { By } = require("selenium-webdriver");

async function login(ventana,usuario,contrasena){

    await ventana.findElement(By.className("btn-login")).click();
    
    //Rellenar campo de correo y contraseña
    await ventana
      .findElement(By.id("loginEmail"))
      .sendKeys(usuario);
    await ventana
      .findElement(By.id("loginPassword"))
      .sendKeys(contrasena);
      
    //Click en iniciar sesion
    await ventana.findElement(By.id("loginInit")).click();
}

module.exports = { login };