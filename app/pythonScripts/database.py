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
        
        if not 'end_time' in record.keys():
            record['end_time'] = ''

        event_data= {

            'event_ID' : record['id'],
            'event_Title' : record['name'],
            'event_StartTime' : record['start_time'],
            'event_EndTime' : record['end_time'],
            'event_Room': record['place']['name'],
            'event_Description' : record['description'],
            'event_CoverImage' :  record['source']
        }

        result = self._events.insert_one(event_data)
        print('One post: {0}'.format(result.inserted_id))

    def checkForEventUpdate(self,jsonData):
        
        for x in jsonData:
            if not self.checkInDB(x) :
                self.insert(x)
            
            

    
    def checkInDB(self,record):
        if self._events.find_one({'event_ID':record['id']}):
            return True
        else:
            return False 

