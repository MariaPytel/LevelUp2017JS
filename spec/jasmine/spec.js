beforeAll(function(){//'kod który wykona się przed wszystkicm',
});
beforeEach(function(){
});
afterAll(function(){
});
afterEach(function(){
});

describe('Protractor Demo App', function() {
    it('should have a title', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    //    expect(element(By.css('#header > app-toolbar > div.logo > a')).getText()).toEqual('SHOP');
        expect(browser.findElement(By.css('.shopping_cart'))
            .getText())
            .toEqual('Cart (empty)');
    });
});
    