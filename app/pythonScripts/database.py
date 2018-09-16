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
  

        
    
    def insert(self,record, eventType):
        
        if not 'end_time' in record.keys():
            record['end_time'] = ''

        event_data= {

            'event_ID' : record['id'],
            'event_Title' : record['name'],
            'event_StartTime' : record['start_time'],
            'event_EndTime' : record['end_time'],
            'event_Room': record['place']['name'],
            'event_Description' : record['description'],
            'event_CoverImage' :  record['source'],
            'event_Type' : eventType
        }

        result = self._events.insert_one(event_data)
        print('One post: {0}'.format(result.inserted_id))

    
    def updateEventType(self,record,currentEventType):
        
        if record['event_Type'] == "upcoming" and currentEventType == "past":
            self._events.update_one({'event_ID':record['id']},{"$set":{"event_Type":"past"}})


    
    
    def checkForEventUpdate(self, eventDict):

        for eventType, events in eventDict.items():
            if events:   #  ensure that events is not empty
                for event in events:
                    if not self.checkInDB(event) :
                        self.insert(event, eventType)
                    else:
                        self.updateEventType(event,eventType)
                
            

    
    def checkInDB(self,record):
        if self._events.find_one({'event_ID':record['id']}):
            return True    
        else:
            return False 

