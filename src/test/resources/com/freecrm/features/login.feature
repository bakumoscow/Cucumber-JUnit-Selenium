Feature: Free CRM Login Functionality 

#Without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#	Given user is already on Login Page
#	When title of Login Page is Free CRM
#	Then user enters "yumukhov" and "123456"
#	Then user clicks on Login button
#	Then user is on Home Page

#With Examples Keyword
Scenario Outline: Free CRM Login Test Scenario
	Given user is already on Login Page 
	When title of Login Page is Free CRM 
	Then user enters "<username>" and "<password>" 
	Then user clicks on Login button 
	Then user is on Home Page 
	
	Examples: 
		| username | password |
		| yumukhov | 123456   |
		| yumukhov | 123456   | 
	