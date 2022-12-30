package com.primus.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutPage {
	WebDriver driver;
	
	@FindBy(xpath="//*[@id='Table_02']/tbody/tr/td[3]/a/img")
	WebElement logoutbtn;
	
	@FindBy(xpath="//*[@id='Table_07']/tbody/tr/td[2]/a/img")
	WebElement home;

	public void clickLogout(){
		logoutbtn.click();
	}
	public void validateLogout(){
		home.isDisplayed();
	}
	
	public LogoutPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
}
}