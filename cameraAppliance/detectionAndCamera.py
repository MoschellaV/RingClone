import cv2 as cv

def draw_rect(frame, coordinates):
    '''
    This fucntion draws a rectangle around detected faces.
    '''
       
    for (x,y,w,h) in coordinates:
        cv.rectangle(frame, (x,y), (x+w, y+h), (0,255,0), 2)
        
