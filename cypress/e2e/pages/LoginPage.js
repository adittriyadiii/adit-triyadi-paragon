export class LoginPage {
  // Locators
  FIELD_PHONE_NUMBER = 'input[type="number"]';
  FIELD_PASSWORD = 'input[type="password"]';
  BUTTON_MASUK = '#page-login__button-login';

  /**
   * Method
   */
  inputPhoneNumber(phoneNumber) {
    cy.get(this.FIELD_PHONE_NUMBER)
      .should("be.visible")
      .type(phoneNumber);
  }
  inputPassword(password) {
    cy.get(this.FIELD_PASSWORD)
      .should("be.visible")
      .type(password);
  }

  clickMasukButton() {
    cy.get(this.BUTTON_MASUK)
      .should("be.visible")
      .click();
  }
}
