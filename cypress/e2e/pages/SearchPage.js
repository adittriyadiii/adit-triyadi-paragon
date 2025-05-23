export class SearchPage {
  // Locators
  BUTTON_SEARCH_BAR = ".chakra-input";
  PRODUCT_LANDING_PAGE = ".styles_card-body-h2-grid__lzKGQ";
  /**
   * Method
   */
  searchProduct(productName) {
    cy.get(this.BUTTON_SEARCH_BAR).type(productName);
    cy.get(this.BUTTON_SEARCH_BAR).type("{enter}");
  }
  chooseProduct(productName) {
    cy.get(this.PRODUCT_LANDING_PAGE).contains(productName).first().click();
  }
}
