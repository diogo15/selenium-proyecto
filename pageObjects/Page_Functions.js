const { By } = require("selenium-webdriver");
const { Base_Page } = require("./Base_Page");
const params = require("./params");

class Page_Functions extends Base_Page {
    constructor () {
        super();
    }

    async close () {
        super.close_instance();
    }

    async quit () {
        super.quit_instance();
    }

    async rest (time) {
        super.sleep(time);
    } 

    async get_into (url) {
        super.get_into_URL(url);
    }

    async click_on_element (element) {
        super.click(element);
    }

    async getText (element) {
        return super.get_text(element);
    }

    async findBy_ID (locator) {
        return super.element_ID(locator);
    }

    async findBy_LinkText (locator) {
        return super.element_LinkText(locator);
    }

    async findElementBy_XPath (locator) {
        return super.element_XPath(locator);
    }

    async findElementsBy_XPath (locator) {
        return super.elements_XPath(locator);
    }

    async fill_up_inputs (xpath, data) {
        try {
            var inputs = await super.elements_XPath(xpath);
        } catch (error) {
            console.error(error);
        }
        return super.array_inputs(data, inputs);
    }

    async waitBy_id (locator) {
        return super.wait_element_appear_id(locator);
    }
    
    async waitBy_lt (locator) {
        return super.until_element_appear_lt(locator);
    }

    async login(usuario, contrasena){
        super.click(
            await super.element_ClassName('btn-login')
        );

        super.sleep(1000);
            //Rellenar campo de correo y contraseña
        super.sendKeys(
            await super.element_ID(params.user_TF),
            usuario
        );

        super.sendKeys(
            await super.element_ID(params.pass_TF),
            contrasena
        );
    }
}

module.exports = { Page_Functions }