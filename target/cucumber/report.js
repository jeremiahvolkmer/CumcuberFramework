$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to account",
  "description": "Existing stackoverflow user should be able to login into account using correct credentials",
  "id": "login-to-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8951218255,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into account with correct details",
  "description": "",
  "id": "login-to-account;login-into-account-with-correct-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on the login button on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be taken to the successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_stackoverflow_website()"
});
formatter.result({
  "duration": 1665741371,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clickes_on_the_login_button_on_homepage()"
});
formatter.result({
  "duration": 3668617284,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 2154162493,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valide_password()"
});
formatter.result({
  "duration": 70253198,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1457032400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_the_successful_login_page()"
});
formatter.result({
  "duration": 3208362165,
  "status": "passed"
});
formatter.after({
  "duration": 19767767,
  "status": "passed"
});
});