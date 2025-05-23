import { When } from "@badeball/cypress-cucumber-preprocessor";
import { landingPage } from "./index";

When("User visit {string}", (url) => {
  if (!url.startsWith("https")) {
    url = "https://" + url;
  }
  cy.visit(url);
  cy.get('svg[style="cursor: pointer;"]').then(($el) => {
    if ($el.length > 0) {
      cy.get($el).click();
    }
  });
});

When("User click masuk button on landing page", () => {
  landingPage.clickMasukButton();
});