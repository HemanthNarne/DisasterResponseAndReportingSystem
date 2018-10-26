/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projwebtest.SeleniumWebsite;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class NewMain {

    /**
     * @param args the command line arguments
     */
     public static void main(String[] args) throws FileNotFoundException, InterruptedException {

        Scanner scanid = new Scanner(new File("NorthwestIDs.txt"));
        Scanner scanpassword = new Scanner(new File("password.txt"));
        PrintWriter pwrt = new PrintWriter(new File("output.txt"));

        System.setProperty("webdriver.chrome.driver", "C:\\Users\\S530459\\Downloads\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://drrs.herokuapp.com/#/login");

       
}
}