import { When } from "@badeball/cypress-cucumber-preprocessor";
import { searchPage } from "./index";

When("User search product {string} on search page", (productName) => {
  searchPage.searchProduct(productName);
});