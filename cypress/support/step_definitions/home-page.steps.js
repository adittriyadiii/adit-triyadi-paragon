import { When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "./index";

When("User click {string} button navbar on home page", (navbar) => {
  homePage.clickNavbar(navbar);
});

When("User should direct to home page", () => {
  cy.location("pathname").should("eq", "/home");
});
