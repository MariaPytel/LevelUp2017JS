var WomenPage = function WomenPage(){
    this.womenLabel = element(By.css('#categories_block_left > h2'));
    this.topsLink = element(By.css('#categories_block_left > div > ul > li:nth-child(1) > a'))
}

module.exports = WomenPage;