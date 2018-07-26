$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/freecrm/features/login.feature");
formatter.feature({
  "name": "Free CRM Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Login Test Scenario",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "yumukhov",
        "123456"
      ]
    },
    {
      "cells": [
        "yumukhov",
        "123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
});