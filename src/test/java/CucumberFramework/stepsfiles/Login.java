package CucumberFramework.stepsfiles;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	WebDriver driver; 
	
	@Before 
	public void setup()
	{
		System.setProperty("webdriver.gecko.driver", 
				"/home/bluedog/Program/eclipse_ws/CucumberFramework2/CucumberFramework/src/test/java/CucumberFramework/resources/geckodriver");
		this.driver = new FirefoxDriver(); 
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		this.driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
	}
	
	@After
	public void tearDown()
	{
		this.driver.manage().deleteAllCookies();
		this.driver.quit();
		this.driver = null; 
	}
	@Given("^User navigates to stackoverflow website$")
	public void user_navigates_to_stackoverflow_website() throws Throwable {
	    System.out.println("Method 1");
	}

	@And("^User clicks on the login button on homepage$")
	public void user_clickes_on_the_login_button_on_homepage() throws Throwable {
	}

	@And("^User enters a valid username$")
	public void user_enters_a_valid_username() throws Throwable {
		System.out.println("Method 3");
	}

	@And("^User enters a valid password$")
	public void user_enters_a_valide_password() throws Throwable {
		System.out.println("Method 4");
	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		System.out.println("Method 5");
	}

	@Then("^User should be taken to the successful login page$")
	public void user_should_be_taken_to_the_successful_login_page() throws Throwable {
		System.out.println("Method 6");
	}
}