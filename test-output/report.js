$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/freecrm/features/login.feature");
formatter.feature({
  "name": "Free CRM Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefiniton.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat step_definitions.LoginStepDefiniton.title_of_Login_Page_is_Free_CRM(LoginStepDefiniton.java:29)\r\n\tat ✽.title of Login Page is Free CRM(src/test/resources/com/freecrm/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefiniton.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefiniton.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefiniton.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
});