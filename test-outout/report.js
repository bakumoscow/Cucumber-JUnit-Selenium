$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/freecrm/features/new_contacts.feature");
formatter.feature({
  "name": "Free CRM Create Contatcs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Create a New Contact Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on New Contatc",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ]
    },
    {
      "cells": [
        "yumukhov",
        "123456",
        "Tom",
        "Peter",
        "engineer"
      ]
    },
    {
      "cells": [
        "yumukhov",
        "123456",
        "Baran",
        "Coban",
        "qoyun"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Create a New Contact Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitons.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitons.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"yumukhov\" and \"123456\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New Contatc",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_clicks_on_New_Contatc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Tom\" and \"Peter\" and \"engineer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_enters_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Create a New Contact Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitons.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitons.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"yumukhov\" and \"123456\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on New Contatc",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_clicks_on_New_Contatc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Baran\" and \"Coban\" and \"qoyun\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_enters_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitons.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
});