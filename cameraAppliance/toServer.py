import requests
from datetime import datetime
from pytz import timezone


def notify_server():
    '''
    Sends a post request to the server. Post request includes a message that
    a face was detected and the time it was detected.
    '''
    
    url ="http://10.12.89.172:5051/post"
    payload= { "status": "FACE DETECTED", "time": fetch_time()}
    headers = {"Content-Type": "application/json"}
    
    r = requests.post(url, json=payload, headers=headers)
    
    print("Face detected. OMG I just have to tell the server!")
    
def fetch_time():
    '''
    Gets the current time in the numeric format of year-month-day hr:min:sec
    '''
    
    tz = timezone("EST")
    current_time = datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")
     
    return current_time

