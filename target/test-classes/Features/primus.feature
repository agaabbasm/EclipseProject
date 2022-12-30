Feature: feature to test primus application


Scenario Outline: verify the login functionality
And user on login page
When user enter <username> and <password>
And user click on login button
Then user navigate to admin page

Examples:
|username|password|
|Admin|Admin|

Scenario Outline: verify the new branch creation
And user on login page
When user enter <username> and <password>
And user click on login button
Then user navigate to admin page
And user click on branches and new branches link
When branch details <branchname> and <address1> and <address2> and <address3> and <area> and <zipcode> 
And user click submit details
Then New branches creates succesfully

Examples:
|username|password|branchname|address1|address2|address3|area|zipcode|
|Admin|Admin|srinagar|kukatpally|srnagar|Mnagar|Hyderabad|50002|

Scenario Outline: verify the logout functionality
And user on login page
When user enter <username> and <password>
And user click on login button
Then user navigate to admin page
And user click on logout button
Then user should logout successfully

Examples:
|username|password|
|Admin|Admin|


