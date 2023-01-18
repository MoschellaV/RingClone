'''
from picamera import PiCamera
from time import sleep

import cv2 as cv
print(cv.__version__)


camera = PiCamera()

camera.resolution = (600,400)

camera.start_preview()
sleep(5)
camera.stop_preview()
'''
import cv2 as cv
from time import sleep
from threading import Thread
from faceDetected import notify_server, draw_rect

capture = cv.VideoCapture(0) #to open Camera

#accessing pretrained model
pretrained_model = cv.CascadeClassifier("model.xml")

has_notified = False

# THERE IS A PROBLEM: if a face is detected we add one to the counter
# however the counter is never reset so when a new person is detected
# the notify_server function is not called

t1 = Thread(target=notify_server)

while True:
    boolean, frame = capture.read()
    if boolean == True:
        gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        coordinate_list = pretrained_model.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3) 
            
        #face_frame_detections += 1
        #print(face_frame_detections)
        
        #Face coordinates detected (i.e. there is a face in view)
        if len(coordinate_list) > 0:
            
            #notifying server if it has not already been notified
            if not has_notified:
                
                t1.start()
                #notify_server()
                t1.join()
                has_notified = True
            
            t2 = Thread(target=draw_rect, args=(frame, coordinate_list, has_notified))
            t2.start()
            #draw_rect(frame, coordinate_list, has_notified)
            t2.join()
            
        # Display detected face
        cv.imshow("Live Face Detection", frame)
       
        # condition to break out of while loop
        if cv.waitKey(20) == ord('x'):
            break
        
capture.release()
cv.destroyAllWindows()
            