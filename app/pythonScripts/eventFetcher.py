import requests
from dotenv import load_dotenv
import os
import json
import pprint


def getEventsInfo():

    if(os.getenv('NODE_ENV') != 'production'):
        load_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)),'.env'))

    eventType = ['past','upcoming']
    eventDict = {}

    for eventType in eventType:
        graphEventsURL = "https://graph.facebook.com/v3.2/me/events/?access_token={}&time_filter={}".format(os.getenv("GRAPH_TOKEN"),eventType)
        graphImagesURL= "https://graph.facebook.com/v3.2/me/events/?access_token={}&fields=cover&time_filter={}".format(os.getenv("GRAPH_TOKEN"),eventType)
        
        eventsInfoResponse = requests.get(graphEventsURL)
        jsonData = json.loads(eventsInfoResponse.content.decode())
        returnList = [x for x in jsonData['data']]
    
        imageInfoResponse = requests.get(graphImagesURL)
        jsonImageData = json.loads(imageInfoResponse.content.decode())
        for inx,x in enumerate(jsonImageData['data']):
            returnList[inx]['source'] = x['cover']['source']
        
        eventDict[eventType] = returnList
        
  
    return eventDict


if __name__ == "__main__":

    x= getEventsInfo()
    pprint.pprint(x)
    quit()
    
  