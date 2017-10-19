@smoke
Feature: Login
  As user I want be able login as registered user

  @role(logout)
  Scenario: Login
    Given I'm on Home page
    Then I click link "Sign in"
    And I wait page loaded
    Then Title of page should be "Sign in to GitHub · GitHub"
    And I type "qwerty12345678910@tut.by" to input with label named by "Username or email address"
    And I type "123test123" to input with label named by "Password"
    Then I click button "Sign in"
    And I wait main page loaded
    And Page title is "GitHub"
    And Page contains button with text "Start a project"