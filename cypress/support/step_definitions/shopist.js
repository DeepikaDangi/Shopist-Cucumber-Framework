/// <reference types = 'cypress'/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../../page objects/basePage";
import chairData from "../../fixtures/chairData.json"
import ChairsPage from "../../page objects/chairsPage";
import CartPage from "../../page objects/cartPage";
import ProductDetail from "../../page objects/productDetailPage";

Given("I visit shopist.io", () => {
  cy.visit("/");
  cy.viewport(1366, 768)
});

When("I should click on chairs", () => {
  BasePage.clickChairs()
});

Then ("I land on products page and click on wooden stools", function() {
    ChairsPage.clickProduct(chairData.product04)
})

When ('I click on add to cart', function(){
    ProductDetail.clickAddtoCart()
})

Then ('I land on checkout page and click on checkout and complete the purchase', function(){
    CartPage.assertProductPrice()
    cy.wait(5000)
    CartPage.assertOrderPlaced()
})