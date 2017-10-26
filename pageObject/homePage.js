var HomePage = function HomePage(){
    this.URL = 'http://automationpractice.com';
    this.womenLink = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));
    this.dressesLink = element(By.css('#block_top_menu > ul > li:nth-child(2) > a'))
}

module.exports = HomePage;