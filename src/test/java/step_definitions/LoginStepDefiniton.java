package step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;

public class LoginStepDefiniton {

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

	@Then("user enters username and password")
	public void user_enters_username_and_password() {
		driver.findElement(By.name("username")).sendKeys("yumukhov");
		driver.findElement(By.name("password")).sendKeys("123456");

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

}
