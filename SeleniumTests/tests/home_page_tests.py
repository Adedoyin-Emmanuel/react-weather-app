# tests/home_page_tests.py
from data.test_data import TestData
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from pages.home_page import HomePage

# Test Execution
if __name__ == '__main__':
    # Set up the driver
    service = Service(TestData.DRIVER_PATH)
    driver = webdriver.Chrome(service=service)
    driver.get(TestData.URL)

    # Create an instance of the HomePage class
    home_page = HomePage(driver)

    # Store test results
    test_results = []

    # Test Case 1.1: Verify weather display for a valid location entry
    try:
        home_page.click_weather_button()
        home_page.enter_location(TestData.city_name)  # Valid location
        home_page.click_save_button()
        time.sleep(2)  # Wait for page load (adjust as necessary)
        assert TestData.city_name in home_page.get_weather_details_text(), f"Weather info for {TestData.city_name} not found."
        print("Test Case 1.1 Passed: Weather display for valid location.")
        test_results.append("Test Case 1.1 Passed")
    except Exception as e:
        test_results.append(f"Test Case 1.1 Failed: {e}")

    # Test Case 1.2: Verify the application's response to an invalid location entry
    try:
        home_page.reset()
        home_page.click_weather_button()
        home_page.enter_location(TestData.invalid_location)  # Invalid location
        home_page.click_save_button()
        time.sleep(2)  # Wait for page load (adjust as necessary)
        assert "Invalid location" in driver.page_source, "Error message for invalid location not found."
        print("Test Case 1.2 Passed: Error message for invalid location.")
        test_results.append("Test Case 1.2 Passed")
    except Exception as e:
        test_results.append(f"Test Case 1.2 Failed: {e}")

    # Test Case 1.3: Verify handling of the maximum allowed characters for location input
    try:
        home_page.reset()
        home_page.click_weather_button()
        max_location = 'A' * 50  # Adjust this based on the max allowed length (e.g., 50 characters)
        home_page.enter_location(max_location)
        home_page.click_save_button()
        time.sleep(2)  # Wait for page load (adjust as necessary)
        assert max_location in home_page.get_weather_details_text(), "Weather info for max character input not found."
        print("Test Case 1.3 Passed: Weather display for location with max characters.")
        test_results.append("Test Case 1.3 Passed")
    except Exception as e:
        test_results.append(f"Test Case 1.3 Failed: {e}")

    # Test Case 1.4: Verify the application's behavior when entering a location exceeding the max allowed characters
    try:
        home_page.reset()
        home_page.click_weather_button()
        long_location = 'A' * 51  # Adjust based on max allowed length (e.g., 51 characters)
        home_page.enter_location(long_location)
        home_page.click_save_button()
        time.sleep(2)  # Wait for page load (adjust as necessary)
        assert "Input is too long" in driver.page_source, "Error message for exceeding max character input not found."
        print("Test Case 1.4 Passed: Error message for location exceeding max characters.")
        test_results.append("Test Case 1.4 Passed")
    except Exception as e:
        test_results.append(f"Test Case 1.4 Failed: {e}")

    # Quit the driver
    driver.quit()

    # Summary of test results
    print("\nTest Results Summary:")
    for result in test_results:
        print(result)
