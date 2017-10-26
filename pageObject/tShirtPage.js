var TShirtPage = function TShirtPage(){
    this.productLabel = element(By.css('.pb-center-column > h1:nth-child(1)'));
    this.productStatus = element(By.css('#product_condition > span'));
    this.productSizeDropdownList = element(By.css('#group_1'));
    this.productSize = element(By.css('#group_1 > option:nth-child(2)'));
    this.addToCart = element(By.css('#add_to_cart > button > span'));
    this.closePopup = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));
    this.checkCart = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    this.textInPopup = $('.layer_cart_product.col-xs-12.col-md-6 >h2');
    this.headerTextInPopup = $('.layer_cart_product.col-xs-12.col-md-6 >h2');
}
        TShirtPage.prototype.isLabelLongerThan = function (isLongerThan) {
            var x=this.productLabel;
            return new Promise(function (resolve) {
                x.getText().then(function (text) {
                    resolve(text.lenght > isLongerThan);
                })
            });
}
TShirtPage.prototype.getPopupText = function () {
    var that = this;
    return that.headerTextInPopup.getText();
}

module.exports = TShirtPage;