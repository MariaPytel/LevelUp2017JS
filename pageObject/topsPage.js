var TopsPage = function TopsPage(){
    this.topsLabel = element(By.css('#categories_block_left > h2'));
    this.tShirtLink = element(By.css('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > h5 > a'));
    this.tShirtImage = element(By.css('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img'))
}

module.exports = TopsPage;

