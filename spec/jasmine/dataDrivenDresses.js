var using = require("jasmine-data-provider");

var data = {
    "dress1": {
        'dressName': "SelectoRSunkienki1",
        "price": "26",
    },
    "dress2": {
        'dessName': "SelectoRSunkienki2",
        "price": "50.99",
    },
    "dress3": {
        'dessName': "SelectoRSunkienki2",
        "price": "28.98",
    },
    "dress4": {
        'dessName': "SelectoRSunkienki2",
        "price": "30.50",
    },
    "dress5": {
        'dessName': "SelectoRSunkienki2",
        "price": "16.40",
    }
}

var AnyPageObject = {
    'SelectoRSunkienki1': "#contact-link",
    'SelectoRSunkienki2': ".shopping_cart",
}

using(data,function(element) {
    describe('Protractor Demo App' + element , function() {
        it('should have a title', function() {
    
            browser.waitForAngularEnabled(false);
            browser.get('http://automationpractice.com/index.php?id_category=8&controller=category');
        //    expect(element(By.css('#header > app-toolbar > div.logo > a')).getText()).toEqual('SHOP');
            expect(browser.findElement(By.css(element.cssSelector))
                .getText())
                .toEqual(element.value);
        });
    })

using(data,function(daneDlaJednegoTestu){

    console.log(daneDlaJednegoTestu);
    console.log(UdawanyPageObject[daneDlaJednegoTestu.nazwaSelectoraZPageObject]);


})