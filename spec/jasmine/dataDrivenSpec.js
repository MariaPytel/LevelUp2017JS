
var data = {
    "contact us":{
        'cssSelector':"#contact-link",
        "value":"Contact us"
    },
    "shop":{
        'cssSelector':".shopping_cart",
        "value":"Cart (empty)"
    }

}

using(data,function(element) {
    describe('Protractor Demo App' + element , function() {
        it('should have a title', function() {
    
            browser.waitForAngularEnabled(false);
            browser.get('http://automationpractice.com/index.php');
        //    expect(element(By.css('#header > app-toolbar > div.logo > a')).getText()).toEqual('SHOP');
            expect(browser.findElement(By.css(element.cssSelector))
                .getText())
                .toEqual(element.value);
        });
    })

});