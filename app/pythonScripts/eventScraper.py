from selenium.webdriver import Chrome
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
from pymongo import MongoClient
import gridfs


def eventScraper():

    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.binary_location = "/usr/bin/chromium-browser"
    chrome_driver_binary = "/usr/bin/chromedriver"
    browser = webdriver.Chrome(chrome_driver_binary, chrome_options=options)

    Events, EventIDs = loadMainPage(browser)
    EventCount = len(Events)
    print("event count is : {}".format(EventCount))
    EventsInfo = []

    for x in range(EventCount):

        browser.get('https://www.facebook.com/events/' +
                    EventIDs[x] + '/?ref_page_id=123880538306787&acontext={"source":5,"action_history":[{"surface":"page","mechanism":"main_list","extra_data":"\"[]\""}],"has_source":true}')

        EventTitles = browser.find_elements_by_xpath(
            '//h1[contains(@id,"seo_h1_tag")]')
        EventStartDate = browser.find_elements_by_xpath(
            '//span[contains(@itemprop,"startDate")]')
        EventTimes = browser.find_elements_by_xpath(
            '//span[contains(@title,"in your time")]')
        EventTimeElapsed = browser.find_elements_by_xpath(
            '//div[contains(@class,"_5xhp fsm fwn fcg")]')
        EventLocation = browser.find_elements_by_xpath(
            '//span[contains(@class,"_5xhk")]')
        EventDescription = browser.find_elements_by_xpath(
            '//div[contains(@class,"_63ew")]/span')

        EventImage = (browser.find_elements_by_xpath(
            '//div[contains(@class,"_3kwh")]/a'))[0].get_attribute('data-ploi')

        EventsInfo.append([(EventIDs[x]),
                           tuple([y.text for y in EventTitles]),
                           tuple([y.text for y in EventStartDate]),
                           [y.text for y in EventTimes],
                           tuple([y.text for y in EventTimeElapsed]),
                           tuple([y.text for y in EventLocation]),
                           (EventDescription[0].text),
                           (EventImage)]
                          )
    print(EventsInfo)
    return EventsInfo
    browser.close()


def loadMainPage(browser):
    browser.get('https://www.facebook.com/pg/cybersocyork/events/')
    try:
        element = WebDriverWait(browser, 30).until(
            EC.presence_of_element_located((By.CLASS_NAME, '_62uk'))
        )
    except:
        browser.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);")
        takeScreenshot(browser)

    Events = browser.find_elements_by_xpath(
        '//span[contains(@class,"_50f7")]')
    EventIDS = browser.find_elements_by_xpath(
        '//a[contains(@data-hovercard,"event.php?id=")]')
    EventIDS = extractEventID(EventIDS)
    return Events, EventIDS


def extractEventID(element):
    for x in range(len(element)):
        element[x] = element[x].get_attribute("data-hovercard")
        element[x] = (element[x][(element[x].index('=')+1):])
    return element


def takeScreenshot(browser):
    if browser.save_screenshot('result.png'):
        print("saved")


if __name__ == '__main__':

    eventScraper()
    quit()
