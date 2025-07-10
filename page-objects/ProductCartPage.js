export class ProductCartPage {
    get cartContentsConatiner() { 
        return $('#cart_contents_container');
    }

    get cartContentsList() {
        return $('.cart_list').$$('.cart_item');
    }

    get shoppingBadgeIcon() {
        return $('.shopping_cart_badge');
    }

    get checkoutButton() { 
        return $('#checkout');
    }

    get productItemName () {
        return $('.inventory_item_name');
    }
    get productItemDescription() {
        return $('.inventory_item_desc');
    }
    get productItemPrice() {
        return $('.inventory_item_price');
    }

    async validateProductItemDetails(productName, productDescription, productPrice) {
        await expect(this.productItemName).toHaveText(productName);
        await expect(this.productItemDescription).toHaveText(productDescription);
        await expect(this.productItemPrice).toHaveText(productPrice);
    }
}