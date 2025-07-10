export class ProductItemPage {
    get productItemName () {
        return $('.inventory_details_name');
    }
    get productItemDescription() {
        return $('.inventory_details_desc');
    }
    get productItemPrice() {
        return $('.inventory_details_price');
    }

    async validateProductItemDetails(productName, productDescription, productPrice) {
        await expect(this.productItemName).toHaveText(productName);
        await expect(this.productItemDescription).toHaveText(productDescription);
        await expect(this.productItemPrice).toHaveText(productPrice);
    }

    get AddToCartButton() { return $('#add-to-cart') };

    get shoppingBadgeIcon() { return $('.shopping_cart_badge') }

    get CartButton() { return $('.shopping_cart_link') };
}