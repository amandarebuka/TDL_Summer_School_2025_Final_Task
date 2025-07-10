Feature: SwagLabs checkout test

    Feature covering the SwagLabs cart functionality

    Background: 
        Given user is on the SwagLabs login page
        When user inputs username - "standard_user"
        And user inputs password - "secret_sauce"
        And user clicks on the login button
        Then user sees Products page

    @FINAL-TASK
    Scenario: User Purchases an item from the cart
        When user selects product item - "<firstProductName>"
        Then user sees correct product details
        When user clicks on the Add to cart button
        And user sees item added to cart
        And user clicks on the cart
        Then user sees Cart page
        Then user sees correct cart details
        When user clicks on Checkout
        Then user sees Checkout page
        When user inputs first name - "<firstName>"
        And user inputs last name - "<lastName>"
        And user inputs postal code - "<postalCode>"
        And user clicks on the continue button
        Then user sees Overview page
        Then user sees correct purchase details
        When user clicks on the finish button
        Then user sees Complete order page

        Examples:
        | firstProductName           | firstName   | lastName    | postalCode    |
        | Sauce Labs Backpack        | Janis       | Berzins     | LV-3602       |
        | Sauce Labs Bolt T-Shirt    | Anna        | Kalnina     | LV-5001       |