Feature: shopist.io
  Scenario: visiting the frontpage, clicking a product into cart, finishing purchase
    Given I visit shopist.io
    When I should click on chairs 
    Then I land on products page and click on wooden stools
    When I click on add to cart
    Then I land on checkout page and click on checkout and complete the purchase
