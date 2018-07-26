Feature: Deals Data Creation


Scenario: Free CRM Create a New Deal Scenario
	Given user is already on Login Page 
	When title of Login Page is Free CRM 
	Then user enters username and password
	| yumukhov | 123456 |
	Then user clicks on Login button 
	Then user is on Home Page 
	Then user clicks on New Deal page
	Then user enters Deal details
	| test deal | 1000 | 50 | 10 |
	Then user closes the browser 