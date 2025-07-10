export class ProductPage {
    get productInventoryConatiner() { 
        return $('.inventory_container');
    }

    get productInventoryList() {
        return $('.inventory_list').$$('.inventory_item');
    }

    get shoppingBadgeIcon() {
        return $('.shopping_cart_badge')
    }

    get productSortByButton() {
        return $('.product_sort_container')
    }

    // get productSortByName(){
    //     return $('option value="za"')
    // }

    // get productSortedItem() { 
    //     return $('.inventory_item_name');
    // }

    async chooseSortingOption(sortingOption) {
        const optionList = await this.productSortByButton.$$('option');

        for(let i = 0; i < optionList.length; i++){
            const optionName = await optionList[i].getText();

            if(optionName === sortingOption) {
                await optionList[i].click();
                break;
            }
        }
    }

    async checkProductNameById(id, productName) {
        const actualProductName = await this.productInventoryList[id].$('.inventory_item_name');
        
        await expect(actualProductName).toHaveText(productName);
    }

    async getProductDescription(name) {
        const productList = await this.productInventoryList;

        let productDescription = null;

        for(let i = 0; i < productList.length; i++) {
            const productName = await productList[i].$('.inventory_item_name').getText();

            if(productName === name) {
                productDescription = await productList[i].$('.inventory_item_desc').getText();
                break;
            }
        }
        
        return productDescription;
    };

    async getProductPrice(name) {
        const productList = await this.productInventoryList;

        let productPrice= null;

        for(let i = 0; i < productList.length; i++) {
            const productName = await productList[i].$('.inventory_item_name').getText();

            if(productName === name) {
                productPrice = await productList[i].$('.inventory_item_price').getText();
                break;
            }
        }
        
        return productPrice;
    };

    async selectProductItem(name) {
        const productList = await this.productInventoryList;

        for(let i = 0; i < productList.length; i++) {
            const productName = await productList[i].$('.inventory_item_name').getText();

            if(productName === name) {
                await productList[i].$('.inventory_item_name').click();
                break;
            }
        }
    }
}