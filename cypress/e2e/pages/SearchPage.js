export class SearchPage {
  // Locators
  BUTTON_SEARCH_BAR = ".chakra-input";
  SEARCH_RESULT_PRODUCT_PAGE = ".styles_card-body-h2-grid__lzKGQ";
  /**
   * Method
   */
  searchProduct(productName) {
    cy.get(this.BUTTON_SEARCH_BAR).type(productName);
    cy.get(this.BUTTON_SEARCH_BAR).type("{enter}");
  }
  chooseProduct(productName) {
    cy.get(this.SEARCH_RESULT_PRODUCT_PAGE).contains(productName).first().click();
  }
}