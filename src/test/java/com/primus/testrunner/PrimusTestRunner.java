package com.primus.testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/primus.feature",glue={"com.primus.stepdefinition"},
monochrome=true,


plugin={"pretty","json:target/JSONReport/report.json",
		"junit:target/JunitReport/report.xml",
		"html:target/HtmlReport",
		"json:target/cucumber.json"
		}
		)



public class PrimusTestRunner {

}
