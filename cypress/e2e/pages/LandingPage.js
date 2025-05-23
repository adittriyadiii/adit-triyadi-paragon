export class LandingPage {
  // Locators
  BUTTON_MASUK = ".HeaderQbee_text-masuk__mWQAN > a";

  /**
   * Method
   */
  clickMasukButton() {
    cy.get(this.BUTTON_MASUK).should("be.visible").click();
  }
}
