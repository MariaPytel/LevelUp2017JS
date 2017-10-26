var SelectedDressPage = function SelectedDressPage(){
    this.dressPrice = element(By.css("#our_price_display"));
    this.dressName = element(By.css('h1'));
    this.dressesPage = element(By.css('#block_top_menu > ul > li:nth-child(2) > a'));
}

module.exports = SelectedDressPage;
