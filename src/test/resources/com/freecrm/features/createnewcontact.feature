Feature: New Contact Creation 

Scenario: Create New Contact Test Scenario
	Given user is on Home Page
	When user mouse over Contacts link
	Then user clicks on New Contact link
	Then user enters first and last name
	Then user clicks on Save button
	Then verify new contact is created