package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src/test/resources/com/freecrm/features/new_contacts.feature", 	
	glue = "step_definitions", //this should be the package name of step classes
	monochrome = true, ////display the console output in a proper readable format
	plugin = {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
	strict = true, //it will check if any step is not defined in step definition file
	dryRun = false //to check the mapping is proper between feature file and step def file
)

public class CukesRunner { 

}

