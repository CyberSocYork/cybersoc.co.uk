import eventPuller
from eventScraper import eventScraper
from database import DataBase
from pprint import pprint

def main():
    
    db = DataBase()
    EventsInfo = eventScraper()
    db.checkForEventUpdate(EventsInfo)


if __name__ == '__main__':
    
    main()






