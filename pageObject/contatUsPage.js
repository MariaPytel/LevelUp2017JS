var ContactUsPage = function ContactUsPage(){
    this.URL = 'http://automationpractice.com/index.php';
    this.header = element(By.css('#header'));
    this.subjectHeadingDropdown = element(By.css('#id_contact'));
    this.sendButton = element(By.css('#submitMessage'))
    this.contctUsLink = element(By.css('#contact-link > a'))
    

}

module.exports = ContactUsPage;