package com.primus.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class BranchPage {
	WebDriver driver;
	public String alerttext;
	
	@FindBy(xpath="//*[@id='Table_01']/tbody/tr[2]/td/table/tbody/tr[2]/td/a/img")
	WebElement branhces;
     
    @FindBy(xpath="//input[@id='BtnNewBR']")
	WebElement newbranches;
	
	@FindBy(id="txtbName")
	WebElement txt_branchname;
	
	@FindBy(id="txtAdd1")
	WebElement txt_address1;
	
	@FindBy(id="Txtadd2")
	WebElement txt_address2;
	
	@FindBy(id="txtadd3")
	WebElement txt_address3;
	
	@FindBy(id="txtArea")
	WebElement txt_area;
	
	@FindBy(id="txtZip")
	WebElement txt_zipcode;
	
    @FindBy(name="lst_counrtyU")
	WebElement countrydd;
	
	@FindBy(name="lst_stateI")
	WebElement statedd;
	
	@FindBy(name="lst_cityI")
	WebElement citydd;
	
	@FindBy(name="btn_insert")
	WebElement searchbtn;
	
	@FindBy(id="lab19")
	WebElement branchdetailslabel;
	
	public void branchesClick() throws InterruptedException{
		branhces.click();
		Thread.sleep(1000);
		newbranches.click();
		Thread.sleep(1000);
	}
	
	public void enterBranchDetails(String branchname,String address1,String address2,
			String address3,String area,int zipcode) throws InterruptedException{
		txt_branchname.sendKeys(branchname);
		Thread.sleep(1000);
		txt_address1.sendKeys(address1);
		Thread.sleep(1000);
		txt_address2.sendKeys(address2);
		Thread.sleep(1000);
		txt_address3.sendKeys(address3);
		Thread.sleep(1000);
		txt_area.sendKeys(area);
		Thread.sleep(1000);
		txt_zipcode.sendKeys(String.valueOf(zipcode));
		Thread.sleep(1000);
		Select ctrydd=new Select(countrydd);
		ctrydd.selectByIndex(1);
		Thread.sleep(1000);
		Select statdd=new Select(statedd);
		statdd.selectByIndex(1);
		Thread.sleep(1000);
		Select ctydd=new Select(citydd);
		ctydd.selectByIndex(1);
		Thread.sleep(1000);	
	}
	
	public void clickSearchButton() throws InterruptedException {
		searchbtn.click();
		Thread.sleep(1000);
		alerttext=driver.switchTo().alert().getText();
		System.out.println("Alert text::"+alerttext);
		driver.switchTo().alert().accept();
		Thread.sleep(1000);
	}
	
	public void newBranchValidate(){
		boolean branchlabel=branchdetailslabel.isDisplayed();
		System.out.println("Branch Label value"+branchlabel);
		System.out.println("***********Branch created successfully**************");
	}
	public BranchPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
}
}
