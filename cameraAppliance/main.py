import cv2 as cv
from time import sleep
from threading import Thread
from send_log import detected_person
from helper import draw_rect

# to open Camera
capture = cv.VideoCapture(0) 

# accessing pretrained model
pretrained_model = cv.CascadeClassifier("model.xml")

counter = 0

while True:
    boolean, frame = capture.read()
    if boolean == True:
        gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        coordinate_list = pretrained_model.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3) 
        
        # face coordinates detected (i.e. there is a face in view)
        if len(coordinate_list) > 0:
    
            # implemented a counter so that the server is not spammed with requests
            if counter > 100:
                
                # start new thread to send request to server 
                detected_person_thread = Thread(target=detected_person)
                detected_person_thread.start()
                
                counter = 0
                
            draw_rect(frame, coordinate_list)
         
        counter +=1

        # display detected face
        cv.imshow("Live Face Detection", frame)
           
        # condition to break out of while loop
        # clicking the 'x' key
        if cv.waitKey(20) == ord('x'):
            break

capture.release()
cv.destroyAllWindows()
            