from pymongo import MongoClient
import requests

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
        
        event_data = self.convertToDataEntry(record,eventType)
        result = self._events.insert_one(event_data)
        print('One post: {0}'.format(result.inserted_id))

    def convertToDataEntry(self,record, eventType):
        
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

        return event_data





    def updateEventType(self,record,currentEventType):

        currentRecord =  self._events.find_one({'event_ID': record['id']})
        if currentRecord['event_Type'] == "upcoming" and currentEventType == "past":
            self._events.update_one({'event_ID':record['id']},{"$set":{"event_Type":"past"}})
            print("updated event {}".format(record['event_ID']))
        
        else:
            print("No change in event")

        self.checkForChangeInEventDetails(currentRecord,record,currentEventType)

        

    
    
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


    def checkForChangeInEventDetails(self,currentEvent,newEvent, currentEventType):

        newEvent = self.convertToDataEntry(newEvent,currentEventType)
        for key, value in currentEvent.items():
            if key == "_id":
                continue
            if newEvent[key] != value:
                self._events.update_one({'event_ID':currentEvent['event_ID']},{"$set":{key:newEvent[key]}})
