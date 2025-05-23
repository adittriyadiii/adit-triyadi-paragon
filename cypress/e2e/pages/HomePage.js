export class HomePage {
  // Locators
  BUTTON_NAVBAR = "div.icon-nav";
  /**
   * Method
   */
  clickNavbar(navbar) {
    switch (navbar) {
      case "Search":
        cy.get("div.icon-nav")
          .find("li")
          .eq(0)
          .click();
        break;
      default:
        break;
    }
  }
}
