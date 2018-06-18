from pymongo import MongoClient
from bson import Binary
import gridfs
import requests
import pprint
import os
from urllib import parse




class DataBase():
    
    _db = None
    _client = None
    _events = None
  

    
    def __init__(self,DB_USER,DB_PASSWORD):
        self._client = MongoClient('ds263660.mlab.com',63660)
        self._db = self._client['events_db']
        self._db.authenticate(DB_USER,DB_PASSWORD)
        self._events = self._db.events
        
    
    def insert(self,record):
        
        event_data= {

            'event_ID' : record[0],
            'event_Title' : record[1][0],
            'event_Date' : record[2][0],
            'event_Times' : record[3],
            'event_TimeElapsed' : record[4][0],
            'event_Room': record[5][0],
            'event_Description' : record[6],
            'event_CoverImage' :  record[7]
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
