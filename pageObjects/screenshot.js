/*
 * 
 * Para Usarlo DOS pasos:
 * 
 * 1.Se importa:
 * const ss = require('../pageObjects/screenshot');
 * 
 * 2.se usa enviandole el driver y el nombre de la imagen:
 * await ss.screenshot(driver, 'hola');
 * 
 * 
 */


async function screenshot(chrome,nombre){
    await chrome.takeScreenshot().then(
        function(image) {
            require('fs').writeFileSync(nombre+".png", image, 'base64');
        }
    );
}

module.exports = { screenshot };

