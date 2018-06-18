import eventPuller
from eventScraper import eventScraper
from database import DataBase
from pprint import pprint
from dotenv import load_dotenv
import os
import sys

def main():
    
    load_dotenv(os.path.join(os.path.dirname(os.getcwd()),'.env'))
  
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    db = DataBase(DB_USER,DB_PASSWORD)
    EventsInfo = eventScraper()
    db.checkForEventUpdate(EventsInfo)


if __name__ == '__main__':
    
    main()






