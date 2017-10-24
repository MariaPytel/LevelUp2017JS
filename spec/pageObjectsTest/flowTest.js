var HomePage = require("../../pageObject/homePage");
var ContactUsPage = require("../../pageObject/contatUsPage");

var homePage = new HomePage();
var contactUsPage = new ContactUsPage();

describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
        homePage.contactUsLink.click();

        expect(contactUsPage.header.isPresent());
        expect(contactUsPage.subjectHeadingDropdown.isPresent());
        expect(contactUsPage.sendButton.isPresent());
    });
});
    