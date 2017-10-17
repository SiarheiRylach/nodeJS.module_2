@smoke
Feature: Download page
  As user I want be able to click download and get info about app

  Scenario: Validation details
    Given I am on Home page
    Then Page title should be "The world's leading software development platform · GitHub"
    And Page has link with text "Sign in"
    And Page contains with text "Sign up"
    And Page contains "2" forms for registration