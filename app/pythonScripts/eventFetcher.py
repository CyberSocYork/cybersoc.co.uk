import requests
from dotenv import load_dotenv
import os
import json
import pprint

def getEventsInfo():

    load_dotenv(os.path.join(os.path.dirname(os.getcwd()),'.env'))
    graphEventsURL = "https://graph.facebook.com/v3.0/me/events/?access_token={}".format(os.getenv("GRAPH_TOKEN"))
    graphImagesURL= "https://graph.facebook.com/v3.0/me/events/?fields=cover&access_token={}".format(os.getenv("GRAPH_TOKEN"))

    eventsInfoResponse = requests.get(graphEventsURL)
    jsonData = json.loads(eventsInfoResponse.content.decode())
    returnList = [x for x in jsonData['data']]
    
    imageInfoResponse = requests.get(graphImagesURL)
    jsonImageData = json.loads(imageInfoResponse.content.decode())

    for inx,x in enumerate(jsonImageData['data']):
        returnList[inx]['source'] = x['cover']['source']
  
    return returnList


if __name__ == "__main__":

    x= getEventsInfo()
    quit()
    
  