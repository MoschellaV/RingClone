import cv2 as cv

def notify_server():
    print("face detected")
    
def draw_rect(frame, coordinates, detections):
    '''
    This fucntion draws a rectangle around detected faces and calls
    the notify_server function once a single face is detected.
    '''
    # calling notify server so that a request can be send to the server
    # then the client
    if detections == 1:
        notify_server()
        
    # drawing rectangle in frame
    for (x,y,w,h) in coordinates:
        cv.rectangle(frame, (x,y), (x+w, y+h), (0,255,0), 2)

    