Feature: e2e testing checkout

  Scenario:  Verify user successfully applied promo with eligible product and price
    Given User visit "recruitment-staging-queenbee.paradev.io"
    And User click masuk button on landing page
    And User input phone number "08999999999" on login page
    And User input password "Buattest99!" on login page
    And User click masuk button on login page
    And User should direct to home page
    And User click "Search" button navbar on home page
    And User search product "Fitclair Collagen Drink" on search page
    And User click "Fitclair Collagen Drink" on search result page