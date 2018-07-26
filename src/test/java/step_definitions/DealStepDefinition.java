//package step_definitions;
//
//import java.util.List;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import io.cucumber.datatable.DataTable;
//import io.github.bonigarcia.wdm.WebDriverManager;
//
//
//
////credentials.raw(); did not compile for me, it seems right import is not available
//
//public class DealStepDefinition {
//	WebDriver driver;
//
//	@Given("user is already on Login Page")
//	public void user_is_already_on_Login_Page() {
//		WebDriverManager.chromedriver().setup();
//		driver = new ChromeDriver();
//		driver.get("https://www.freecrm.com");
//	}
//
//	@When("title of Login Page is Free CRM")
//	public void title_of_Login_Page_is_Free_CRM() {
//		String title = driver.getTitle();
//		System.out.println("Login page title: " + title);
//		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
//	}
//
//	@Then("user enters {string} and {string}") // this line and above line, botk works
//	public void user_enters_and(String username, String password) {
//		driver.findElement(By.name("username")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);
//
//	}
//
//	@Then("user enters username and password")
//	public void user_enters_username_and_password(DataTable credentials) {
//		List<List<String>> data = credentials.raw();
//		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//
//	}
//	
//	@Then("user clicks on Login button")
//	public void user_clicks_on_Login_button() {
//		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
//		JavascriptExecutor js = (JavascriptExecutor) driver;
//		js.executeScript("arguments[0].click();", loginBtn);
//	}
//	
//
//	@Then("user is on Home Page")
//	public void user_is_on_Home_Page() {
//		String title = driver.getTitle();
//		System.out.println("Home page title: " + title);
//		Assert.assertEquals("CRMPRO", title);
//	}
//	
//	@Then("user clicks on New Deal page")
//	public void user_clicks_on_New_Deal_page() {
//		driver.switchTo().frame("mainpanel");
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//	}
//
//	@Then("user enters Deal details")
//	public void user_enters_Deal_details(DataTable dealData) {
//		List<List<String>> dealValues = dealData.raw();
//		driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
//		driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
//		driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
//		driver.findElement(By.id("comission")).sendKeys(dealValues.get(0).get(3));
//
//
//
//	}
//	
//	@Then("user closes the browser") 
//	public void user_closes_the_browser () {
//		driver.quit();
//	}
//
//}
