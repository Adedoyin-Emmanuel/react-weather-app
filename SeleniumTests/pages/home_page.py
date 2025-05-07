# pages/home_page.py
import time
from selenium.webdriver.common.by import By

class HomePage:
    def __init__(self, driver):
        self.driver = driver
        self.weather_button = (By.XPATH, "//button[contains(text(), \"today's weather\")]")
        self.location_input = (By.ID, 'defaultLocation')
        self.save_button = (By.CLASS_NAME, "swal2-confirm")
        self.weather_details = (By.ID, 'weatherContainer')
      #  self.error_message = (By.CLASS_NAME, 'error-message')
        self.settings_button=(By.XPATH,"//section[@class='footer-settings-section  brand-text-mute' and text()='Settings']")
        self.restore_button=(By.CLASS_NAME,"shadow")
        
    def reset(self):
        self.driver.find_element(*self.settings_button).click()
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)
        self.driver.find_elements(*self.restore_button)[2].click()
        
            

    def click_weather_button(self):
       # Scroll down a fixed amount (if element is near the bottom of the screen)
         # Scroll to the bottom of the page
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)
        self.driver.find_element(*self.weather_button).click()



    def enter_location(self, location):
        self.driver.find_element(*self.location_input).clear()
        self.driver.find_element(*self.location_input).send_keys(location)

    def click_save_button(self):
        self.driver.find_element(*self.save_button).click()

    def get_weather_details_text(self):
        return self.driver.find_element(*self.weather_details).text

    #def get_error_message_text(self):
       # return self.driver.find_element(*self.error_message).text
