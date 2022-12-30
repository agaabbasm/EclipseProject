package com.primus.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;
	
	@FindBy(id="txtuId")
	WebElement txt_username;

	@FindBy(id="txtPword")
	WebElement txt_password;
	

	@FindBy(id="login")
	WebElement loginbtn;
	

	@FindBy(xpath="/html/body/table/tbody/tr/td/table/tbody/tr[4]/td/table/tbody/tr[1]/td[4]/strong/font/font")
	WebElement admindash;
  
	public void enterLoginDetails(String username, String password){
		txt_username.sendKeys(username);
		txt_password.sendKeys(password);
	}
	
	public void clickLoginButton() throws InterruptedException  {
		loginbtn.click();
		Thread.sleep(2000);
	}
	public void checkWelcomeDashboard(){
		boolean adminval=admindash.isDisplayed();
		System.out.println("Welcome to Dashboard:"+adminval);
	}
	
	public LoginPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
}
