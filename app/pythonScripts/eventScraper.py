from selenium.webdriver import Chrome
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def main():

    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.binary_location = "/usr/bin/chromium-browser"
    chrome_driver_binary = "/usr/bin/chromedriver"
    browser = webdriver.Chrome(chrome_driver_binary, chrome_options=options)

    browser.get('https://www.facebook.com/pg/cybersocyork/events/')

    try:
        element = WebDriverWait(browser, 30).until(
            EC.presence_of_element_located((By.CLASS_NAME, '_62uk'))
        )

    finally:
        browser.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);")

        if browser.save_screenshot('result.png'):
            print("saved")

    EventTitles = browser.find_elements_by_xpath(
        '//span[contains(@class,"_50f7")]')
    EventMonth = browser.find_elements_by_xpath(
        '//span[contains(@class,"_5a4-")]')
    EventDay = browser.find_elements_by_xpath(
        '//span[contains(@class,"_5a4z")]')
    EventTime = browser.find_elements_by_xpath('//span[contains(@class,"")]')

    for inx, x in enumerate(EventTitles):
        print("{} : {}".format(inx, x.text))

    browser.close()


if __name__ == '__main__':

    main()
    quit()
