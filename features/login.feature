Feature: Login

  As a user
  I am on homepage and if i log in with valid email and password successfully, I must be on featured page

  Scenario: Successful Login with email and password
    Given I am on "home" page
    When I click "Login" link on "home" page
    When I set "Email" to "sabri.mutlucag@gmail.com" on "login" popup
    When I set "Password" to "asdcxz12" on "login" popup
    When I click "Login" button on "login" popup
    Then I must be on "featured" page