import { When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "./index";

When("User input phone number {string} on login page", (phoneNumber) => {
  loginPage.inputPhoneNumber(phoneNumber);
});
When("User input password {string} on login page", (password) => {
  loginPage.inputPassword(password);
});

When("User click masuk button on login page", () => {
  loginPage.clickMasukButton();
});
