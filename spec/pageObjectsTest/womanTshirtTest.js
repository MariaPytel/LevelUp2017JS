var HomePage = require("../../pageObject/homePage.js");
var WomenPage = require("../../pageObject/womenPage.js")
var TopsPage = require("../../pageObject/topsPage.js")
var TShirtPage = require("../../pageObject/tShirtPage.js")
var ShoppingCartPage = require("../../pageObject/shoppingCartSummary.js")

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var tShirtPage = new TShirtPage();
var shoppingCartPage = new ShoppingCartPage();
var EC = protractor.ExpectedConditions;

beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.get(homePage.URL);
})

describe('Protractor Demo App', function () {
    it('Go to Women page', function () {
        homePage.womenLink.click();
        expect(womenPage.womenLabel.getText())
        .toEqual('WOMEN');
    });
    it('Go to Tops page', function () {
        expect(womenPage.topsLink.isDisplayed()).toBeTruthy();
        womenPage.topsLink.click();
        expect(topsPage.topsLabel.getText())
        .toEqual('TOPS');
    });
    it('Go to T-shirt page', function () {
        topsPage.tShirtLink.click();
        tShirtPage.isLabelLongerThan(8).then(console.log);
    });
    it('Check if status New', function() {
        expect(tShirtPage.productStatus.getText())
        .toEqual('New');
    })
    it('Select size M, add to cart and check if added', function() {
        tShirtPage.productSizeDropdownList.click();
        tShirtPage.productSize.click();
        expect(tShirtPage.productSize.getText())
        .toEqual('M');
    })
    it('Click Add to cart buton', function(){
        tShirtPage.addToCart.click();
        browser.wait(EC.visibilityOf(tShirtPage.textInPopup), 5000)
        .then(function () {
        expect(tShirtPage.textInPopup.getText()).toEqual("Product successfully added to your shopping cart");
        })
    })
});
    

