package step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewContactStepDefinitons {
	WebDriver driver;
	
	@When("user mouse over Contacts link")
	public void user_mouse_over_Contacts_link() {
		Actions action = new Actions(driver);
		driver.switchTo().frame("mainpanel");
		WebElement element = driver.findElement(By.linkText("Contacts"));
		action.moveToElement(element).build().perform();
	  
	}

	@Then("user clicks on New Contact link")
	public void user_clicks_on_New_Contact_link() {
		driver.findElement(By.linkText("New Contact")).click();
	   
	}

	@Then("user enters first and last name")
	public void user_enters_first_and_last_name() {
	   
	}

	@Then("user clicks on Save button")
	public void user_clicks_on_Save_button() {
	  
	}
	
	@Then("verify new contact is created")
	public void verify_new_contact_is_created() {
	   
	}
}
