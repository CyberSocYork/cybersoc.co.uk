import eventFetcher
from database import DataBase
from pprint import pprint
from dotenv import load_dotenv
import os
import sys
import time

def main():
    
    load_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)),'.env'))
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    db = DataBase(DB_USER,DB_PASSWORD)
    eventsInfo = eventFetcher.getEventsInfo()
    db.checkForEventUpdate(eventsInfo)

    
if __name__ == '__main__':
    
    main()






