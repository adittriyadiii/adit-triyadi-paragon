Feature: e2e testing checkout with eligible promo 

  Scenario: Verify user successfully login and checkout with eligible promo
    Given User visit "recruitment-staging-queenbee.paradev.io"
    And User click masuk button on navbar
    And User input phone number "08999999999" on login page
    And User input password "Buattest99!" on login page
    And User click masuk button on login page
    And User should direct to home page