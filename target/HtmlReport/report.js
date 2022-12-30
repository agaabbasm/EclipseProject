$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/primus.feature");
formatter.feature({
  "name": "feature to test primus application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verify the login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigate to admin page",
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
        "Admin",
        "Admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify the login functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter Admin and Admin",
  "keyword": "When "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_enter_Admin_and_admin123(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_navigate_to_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify the new branch creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigate to admin page",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on branches and new branches link",
  "keyword": "And "
});
formatter.step({
  "name": "branch details \u003cbranchname\u003e and \u003caddress1\u003e and \u003caddress2\u003e and \u003caddress3\u003e and \u003carea\u003e and \u003czipcode\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user click submit details",
  "keyword": "And "
});
formatter.step({
  "name": "New branches creates succesfully",
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
        "branchname",
        "address1",
        "address2",
        "address3",
        "area",
        "zipcode"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "srinagar",
        "kukatpally",
        "srnagar",
        "Mnagar",
        "Hyderabad",
        "50002"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify the new branch creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter Admin and Admin",
  "keyword": "When "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_enter_Admin_and_admin123(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_navigate_to_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on branches and new branches link",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_click_on_branches_and_new_branches_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "branch details srinagar and kukatpally and srnagar and Mnagar and Hyderabad and 50002",
  "keyword": "When "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.branch_details_srinagar_and_kukatpally_and_srnagar_and_address_and_Hyderabad_and_zipcode(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit details",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_click_submit_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "New branches creates succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.new_branches_creates_succesfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify the logout functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigate to admin page",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on logout button",
  "keyword": "And "
});
formatter.step({
  "name": "user should logout successfully",
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
        "Admin",
        "Admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify the logout functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter Admin and Admin",
  "keyword": "When "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_enter_Admin_and_admin123(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to admin page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_navigate_to_admin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on logout button",
  "keyword": "And "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_click_on_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.primus.stepdefinition.PrimusStepDefinition.user_should_logout_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});