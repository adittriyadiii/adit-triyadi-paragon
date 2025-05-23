export class SearchPage {
  // Locators
  SEARCH_BAR = ".chakra-input";
  /**
   * Method
   */
  searchProduct(productName) {
    cy.get(this.SEARCH_BAR).type(productName);
    cy.get(this.SEARCH_BAR).type("{enter}");
  }
}
