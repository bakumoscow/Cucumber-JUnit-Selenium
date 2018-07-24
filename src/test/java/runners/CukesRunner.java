package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src/test/resources/com/freecrm/features", 	
	glue = "step_definitions" //this should be the package name where of step classes
	//format= {"pretty", "html:test-output"}
)

public class CukesRunner { 

}

