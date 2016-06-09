Feature: Sign up

  As a user, when I am on home page and if I sign up succcessfully, I must be on featured page 

  @ignore
  Scenario: Successful sign up with fullanme, email and password
    Given I am on "home" page
    When I click "Sign Up" link on "home" page
    When I set "Fullname" to "SabMu1" on "signup" popup
    When I set "Email" to "sabri.mutlucag1@gmail.com" on "signup" popup
    When I set "Password" to "test123" on "signup" popup
    When I click "Sign Up" button on "signup" popup
    Then I must be on "featured" page