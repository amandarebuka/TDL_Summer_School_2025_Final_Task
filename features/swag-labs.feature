Feature: SwagLabs E2E Tests

    Feature covering the SwagLabs homepages functionality

    Background: 
        Given user is on the SwagLabs login page
        When user inputs username - "standard_user"
        And user inputs password - "secret_sauce"
        And user clicks on the login button
        Then user sees Products page
    

    # Scenario: User successfuly logs in SwagLabs profile
    #     Given user is on the SwagLabs login page
    #     When user inputs username - "standard_user"
    #     And user inputs password - "secret_sauce"
    #     And user clicks on the login button
    #     Then user sees Products page

    # Scenario: User successfuly logs in SwagLabs profile
    #     Given user is on the SwagLabs login page
    #     When user inputs username - "problem_user"
    #     And user inputs password - "secret_sauce"
    #     And user clicks on the login button
    #     Then user sees Products page

    # Scenario Outline: User handles SwagLabs profile authorization
    #     Given user is on the SwagLabs login page
    #     When user inputs username - "<username>"
    #     And user inputs password - "<password>"
    #     And user clicks on the login button
    #     Then user sees Products page
    #     # And user sees 6 product item reflected

    #     Examples:
    #     | username      | password     |
    #     | standard_user | secret_sauce |
    #     | problem_user  | secret_sauce |

    Scenario: SORT PRODUCTS BY NAME (Z-A)
        When user clicks on the Sorting button
        And user chooses to sort by "<sortingOption>"
        Then user sees product "<productName>"

        Examples:
        | username      | password      | sortingOption    | productName                       |
        | standard_user | secret_sauce  | Name (Z to A)    | Test.allTheThings() T-Shirt (Red) |
    
    @WIP @JIRA-6377 @REGRESSION
    Scenario: Validate Selected Product Item Details
        When user selects product item - "<productName>"
        Then user sees correct product details

        Examples:
        | username      | password      | sortingOption    | productName              |
        | standard_user | secret_sauce  | Name (Z to A)    | Sauce Labs Bolt T-Shirt  |

    # @DATA_TABLE
    # Scenario: CHECKING DATA TABLES
    #     When user selects product item - "Sauce Labs Bolt T-Shirt"
        # ///////////// raw() ////////////
        # Then user cheks data table
        #     | test 1 | test 2 | 
        #     | test 3 | test 4 |
        # ///////////// rows() ////////////
        # Then user cheks data table
        #     | Fruit     | Price |
        #     | Apple     | 1.30€ |
        #     | Orange    | 2.30€ |
        # ///////////// rowsHash() ////////////
        # Then user cheks data table
        #     | Apple     | 1.30€ |
        #     | Orange    | 2.30€ |
        # ///////////// hashes() ////////////
        # Then user cheks data table
        #     | Fruit     | Price |
        #     | Apple     | 1.30€ |
        #     | Orange    | 2.30€ |