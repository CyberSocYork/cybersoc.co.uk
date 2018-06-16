from pymongo import MongoClient
from bson import Binary
import gridfs
import requests
import pprint



class DataBase():
    
    _db = None
    _client = None
    _events = None

    
    def __init__(self):
        self._client = MongoClient()
        self._db = self._client.events_DB
        self._events = self._db.event
    
    def insert(self,record):
        
        event_data= {

            'event_ID' : record[0],
            'event_Title' : record[1][0],
            'event_Date' : record[2][0],
            'event_Times' : record[3],
            'event_TimeElapsed' : record[4][0],
            'event_Room': record[5][0],
            'event_Description' : record[6],
            'event_CoverImage' :  Binary(self.getImageBinary(record[7]))
        }

        result = self._events.insert_one(event_data)
        print('One post: {0}'.format(result.inserted_id))

    def checkForEventUpdate(self,scrapedData):
        
        for x in scrapedData:
            if not self.checkInDB(x) :
                self.insert(x)
                print("Added event id {}".format(x[0]))
            

    
    def checkInDB(self,record):
        if self._events.find_one({'event_ID':record[0]}):
            return True
        else:
            return False 

      
        
        
        
    
    def getImageBinary(self,imageUrl):
        
        response = requests.get(imageUrl)
        return response.content
            

