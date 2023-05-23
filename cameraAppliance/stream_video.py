import cv2 as cv
import base64
import socketio

# importing unique device id
# a unique id would be hard coded into every device
# the device's id would also be stored in firestore db for authentication
from device_CONFIG import device_id

sio = socketio.Client()

# construct the connection URL with the device ID as a query param
connection_url = 'http://10.0.0.40:6000/api/stream-video?deviceId=' + device_id

# connect to server
sio.connect(connection_url, namespaces=['/api/stream-video'])

@sio.event
def connect():
    print('Connected to the server')
    

@sio.event
def disconnect():
    print('Disconnected from the server')

def send_video_frame(frame):
    # encode frame as JPEG
    _, img_encoded = cv.imencode('.jpg', frame)

    # convert encoded frame to base64 for transmitting over websocket
    base64_frame = base64.b64encode(img_encoded).decode('utf-8')

    try:
        # emit the frame to the server
        sio.emit('videoFrame', base64_frame, namespace='/api/stream-video')
        print('Sent frame')

    except Exception as err:
        print('Error sending frame:', err)
