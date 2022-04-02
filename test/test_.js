const PO = require ('../pageObjects/Base_Page');
const SP = require ('../pageObjects/SignUp_Page');

describe('PO Testing', function () {
    it('#Get into URL - Via PO', async function () {
        let functions = new SP.SignUp_Page();

        try {

            await functions.get_into('http://intothezone.com');

        } finally {
            await functions.close_instance();
        }
 
    });
});