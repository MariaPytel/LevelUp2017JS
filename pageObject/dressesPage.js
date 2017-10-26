var DressesPage = function DressesPage(){
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dressesLabel = element(By.css('#categories_block_left > h2'));
    this.allDresses = element(By.css('div.product-container'));
    this.dress1 = element(By.css('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img'));
    this.dress2 = element(By.css('#center_column > ul > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img'));
    this.dress3 = element(By.css('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-in-line.first-item-of-tablet-line.last-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img'));
    this.dress4 = element(By.css('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.last-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img'));
    this.dress5 = element(By.css('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.first-item-of-tablet-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img'));
}

module.exports = DressesPage;

