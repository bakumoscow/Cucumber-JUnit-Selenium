package step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;

public class LoginStepDefinitons {

	WebDriver driver;

	@Given("user is already on Login Page")
	public void user_is_already_on_Login_Page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}

	@When("title of Login Page is Free CRM")
	public void title_of_Login_Page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println("Login page title: " + title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}

	// @Then("user enters \"(.*)\" and \"(.*)\"$")
	@Then("user enters {string} and {string}") // this line and above line, botk works
	public void user_enters_and(String username, String password) {
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);

	}

	@Then("user clicks on Login button")
	public void user_clicks_on_Login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("user is on Home Page")
	public void user_is_on_Home_Page() {
		String title = driver.getTitle();
		System.out.println("Home page title: " + title);
		Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("user clicks on New Contatc")
	public void user_clicks_on_New_Contatc() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	@Then("user enters {string} and {string} and {string}")
	public void user_enters_and_and(String firstname, String lastname, String position) {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();

	}
	
	@Then("user closes the browser") 
	public void user_closes_the_browser () {
		driver.quit();
	}

}
