const { Base_Page } = require("./Base_Page");

class SignUp_Page extends Base_Page {
    constructor () {
        super();
    }

    async get_into (url) {
        super.get_into_URL(url);
    }

    fill_up_inputs (data) {
        
    }
}

module.exports = { SignUp_Page }