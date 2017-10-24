var HomePage = require(pageObjectDir+"/homePage");

var homePage = new HomePage();

describe('Protractor Demo App', function() {
    it('should have a title', function() {

        browser.get(homePage.URL);
 
        expect(homePage.cartLabel.getText())
            .toEqual('Cart (empty)');
    });
});
    