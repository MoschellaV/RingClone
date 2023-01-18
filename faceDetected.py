import cv2 as cv
import requests
import json

def notify_server():
    
    url ="http://10.12.89.172:5051/post"
    payload= { "status": "FACE DETECTED"}
    headers = {"Content-Type": "application/json"}
    
    r = requests.post(url, json=payload, headers=headers)
    
    print("Face detected. OMG I just have to tell the server!")

    
def draw_rect(frame, coordinates, has_notified):
    '''
    This fucntion draws a rectangle around detected faces.
    '''
    
    # drawing rectangle in frame
    for (x,y,w,h) in coordinates:
        cv.rectangle(frame, (x,y), (x+w, y+h), (0,255,0), 2)
