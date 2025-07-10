export class OverviewPage {
    get checkoutSummaryContainer() { return $('#checkout_summary_container');}

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

    get produtSubtotal() {
        return $('.summary_subtotal_label');
    }

    get productTax() {
        return $('.summary_tax_label');
    }

    get totalPrice() {
        return $('.summary_total_label');
    }

    async checkTotalPrice(totalPrice) {
        let calculatedTotal = this.produtSubtotal + this.productTax
        if(calculatedTotal === totalPrice){
            return totalPrice;
        }
    };

    get finishButton() { return $('#finish');}
}