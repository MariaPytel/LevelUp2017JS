var DressesPage = require("../../pageObject/dressesPage.js");
var SelectedDressPage = require("../../pageObject/selectedDressPage.js");


var dressesPage = new DressesPage();
var selectedDressPage = new SelectedDressPage();

var data = {
    "dress1": {
        "selector": "dress1",
        "price": "$26.00",
        "dressName": "Printed Dress"
    },
    "dress2": {
        "selector": "dress2",
        "price": "$50.99",
        "dressName": "Printed Dress"
    },
    "dress3": {
        "selector": "dress3",
        "price": "$28.98",
        "dressName": "Printed Summer Dress"
    },
    "dress4": {
        "selector": "dress4",
        "price": "$30.50",
        "dressName": "Printed Summer Dress"
    },
    "dress5": {
        "selector": "dress5",
        "price": "$16.40",
        "dressName": "Printed Chiffon Dress"
    },
}


beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.get(dressesPage.URL);
})

describe('Protractor Demo App', function () {
    it('Check if dresses page is loaded', function () {
        expect(dressesPage.dressesLabel.getText())
        .toEqual('DRESSES');
    })

    using(data, function (dress) {
        it('chose size', function () {
            dressesPage[dress.selector].click();
            expect(selectedDressPage.dressPrice.getText())
            .toEqual(dress.price);
            expect(selectedDressPage.dressName.getText())
            .toEqual(dress.dressName);
            browser.navigate().back(); 
        })       
    });    
});

