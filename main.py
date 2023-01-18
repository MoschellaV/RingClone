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
from faceDetected import notify_server, draw_rect

capture = cv.VideoCapture(0) #to open Camera

#accessing pretrained model
pretrained_model = cv.CascadeClassifier("model.xml")

face_frame_detections = 0

while True:
    boolean, frame = capture.read()
    if boolean == True:
        gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        coordinate_list = pretrained_model.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3) 
            
        face_frame_detections += 1
        
        #draws rectangle around detected faces
        draw_rect(frame, coordinate_list, face_frame_detections)
            
        # Display detected face
        cv.imshow("Live Face Detection", frame)
       
        # condition to break out of while loop
        if cv.waitKey(20) == ord('x'):
            break
        
capture.release()
cv.destroyAllWindows()
            