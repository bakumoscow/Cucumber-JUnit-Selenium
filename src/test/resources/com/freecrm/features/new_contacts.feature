Feature: Free CRM Create Contatcs

Scenario Outline: Free CRM Create a New Contact Scenario
	Given user is already on Login Page 
	When title of Login Page is Free CRM 
	Then user enters "<username>" and "<password>" 
	Then user clicks on Login button 
	Then user is on Home Page 
	Then user clicks on New Contatc
	Then user enters "<firstname>" and "<lastname>" and "<position>"
	Then user closes the browser 
	
	Examples: 
		| username | password | firstname | lastname | position	|
		| yumukhov | 123456   | Tom       | Peter    | engineer	|
		| yumukhov | 123456   | Baran	  | Coban    | qoyun    |
		