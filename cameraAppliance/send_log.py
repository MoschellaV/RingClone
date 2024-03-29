import requests
from datetime import datetime
from pytz import timezone
import os
from dotenv import load_dotenv

# importing unique device id
# a unique id would be hard coded into every device
# the device's id would also be stored in firestore db for authentication
from device_CONFIG import device_id

# access environment variable
load_dotenv()
server_url = os.getenv("SERVER_URL")

def detected_person():
    '''
    Sends a post request to the server. Post request includes a message that
    a face was detected and the time it was detected.
    '''
    
    url = f"{server_url}/api/device/add-log/{device_id}"
    payload= { "status": "FACE DETECTED", "time": fetch_time()}
    
    try:        
        headers = {"Content-Type": "application/json"}
        response = requests.post(url, json=payload, headers=headers)
        
        print("Add log response: {}".format(response.status_code))
    
    except requests.exceptions.RequestException as err:
        print("Error sending log:", err)        
    
def fetch_time():
    '''
    Gets the current time in the numeric format of year-month-day hr:min:sec
    '''
    
    tz = timezone("EST")
    current_time = datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")
     
    return current_time
