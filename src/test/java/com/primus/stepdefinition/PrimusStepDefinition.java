package com.primus.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.primus.pages.BranchPage;
import com.primus.pages.LoginPage;
import com.primus.pages.LogoutPage;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class PrimusStepDefinition {
	WebDriver driver=null;
	LoginPage loginl;
	BranchPage branchb;
	LogoutPage logouto;
	
	@Before
	public void openBrowser(){
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(90,TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(90,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
	}
	
	@After
	public void closeBrowser() throws InterruptedException{
		Thread.sleep(1000);
		driver.quit();
	}
	//scenario1
	@And("user on login page")
	public void user_on_login_page() {
	driver.get("http://primusbank.qedgetech.com/");	
	System.out.println("ADD for eclispe");
	}

	@When("^user enter (.*) and (.*)$")
	public void user_enter_Admin_and_admin123(String username,String password) {
		loginl=new LoginPage(driver);
		loginl.enterLoginDetails(username, password);
	}

	@And("user click on login button")
	public void user_click_on_login_button() throws InterruptedException {
		//Thread.sleep(1000);
		loginl.clickLoginButton();
	}

	@Then("user navigate to admin page")
	public void user_navigate_to_admin_page() {
	loginl.checkWelcomeDashboard();
	System.out.println("****Welcome to DashBoard*************");
	}

	@And("user click on branches and new branches link")
	public void user_click_on_branches_and_new_branches_link() throws InterruptedException {
	branchb=new BranchPage(driver);
	branchb.branchesClick();
	}

	@When("^branch details (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$")
	public void branch_details_srinagar_and_kukatpally_and_srnagar_and_address_and_Hyderabad_and_zipcode(String branchname,
			String address1,String address2,String address3,String area,int zipcode) throws InterruptedException {
		branchb.enterBranchDetails(branchname,address1,address2,address3,area,zipcode);
	}

	@And("user click submit details")
	public void user_click_submit_details() throws InterruptedException {
	branchb.clickSearchButton();
	}

	@Then("New branches creates succesfully")
	public void new_branches_creates_succesfully() {
		branchb.newBranchValidate();
	}
  
	//scenario 3
	@Then("user click on logout button")
	public void user_click_on_logout_button() {
	logouto=new LogoutPage(driver);
	logouto.clickLogout();
	}

	@Then("user should logout successfully")
	public void user_should_logout_successfully() {
		logouto.validateLogout();
	}

}
