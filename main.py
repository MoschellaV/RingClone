from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.resolution = (600,400)

camera.start_preview()
sleep(5)
camera.stop_preview()