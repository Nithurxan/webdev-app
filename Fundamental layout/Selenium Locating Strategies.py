# Author: Nithursan Balarankan
# Date: 2024-03-27
# Type of Document: Selenium Test Script
# Description: This script automates the registration process on https://demo.guru99.com/test/newtours/register.php,
# creates a new user, and asserts successful login using the created credentials.

import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome()

# The registration page
driver.get("https://demo.guru99.com/test/newtours/register.php")
driver.maximize_window()

driver.find_element(By.NAME, "firstName").click()
driver.find_element(By.NAME, "firstName").send_keys("Nithursan")

driver.find_element(By.NAME, "lastName").click()
driver.find_element(By.NAME, "lastName").send_keys("Balarankan")

driver.find_element(By.NAME, "phone").click()
driver.find_element(By.NAME, "phone").send_keys("6479046255")

driver.find_element(By.NAME, "userName").click()
driver.find_element(By.NAME, "userName").send_keys("nithursan.balarankan1@dcmail.ca")

driver.find_element(By.NAME, "address1").click()
driver.find_element(By.NAME, "address1").send_keys("123 Street")

driver.find_element(By.NAME, "city").click()
driver.find_element(By.NAME, "city").send_keys("City")

driver.find_element(By.NAME, "state").click()
driver.find_element(By.NAME, "state").send_keys("State")

driver.find_element(By.NAME, "postalCode").click()
driver.find_element(By.NAME, "postalCode").send_keys("12345")

dropdown = driver.find_element(By.NAME, "country")
select = Select(dropdown)
select.select_by_visible_text("UNITED STATES")

driver.find_element(By.NAME, "email").click()
driver.find_element(By.NAME, "email").send_keys("nithursan.balarankan1@dcmail.ca")

driver.find_element(By.NAME, "password").click()
driver.find_element(By.NAME, "password").send_keys("Nithurxan@04")

driver.find_element(By.NAME, "confirmPassword").click()
driver.find_element(By.NAME, "confirmPassword").send_keys("Nithurxan@04")

driver.find_element(By.NAME, "submit").click()

# The log-in page
driver.get("https://demo.guru99.com/test/newtours/login.php")
driver.maximize_window()

driver.find_element(By.NAME, "userName").click()
driver.find_element(By.NAME, "userName").send_keys("nithursan.balarankan1@dcmail.ca")

driver.find_element(By.NAME, "password").click()
driver.find_element(By.NAME, "password").send_keys("Nithurxan@04")

driver.find_element(By.NAME, "submit").click()

time.sleep(100)
driver.quit()
