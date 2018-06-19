import eventPuller
from eventScraper import eventScraper
from database import DataBase
from pprint import pprint
from dotenv import load_dotenv
import os
import sys
import time

def main():
    
    notComplete = True
    tries = 0
    load_dotenv(os.path.join(os.path.dirname(os.getcwd()),'.env'))
  
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    db = DataBase(DB_USER,DB_PASSWORD)
    while notComplete:
        try:
            EventsInfo = eventScraper()
            notComplete = False
        except Exception as e :
            print(e)
            tries +=1
            print("failed,waiting")
            time.sleep(10)
            if tries == 3:
                print("tried too many times, will try again tomorrow")
                quit()

    db.checkForEventUpdate(EventsInfo)


if __name__ == '__main__':
    
    main()






