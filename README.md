# Rang

<p align="center">
  <img src="https://github.com/MoschellaV/RingClone/assets/58868225/e0496f35-8680-4592-b5c1-b1a6c32b82ae" alt="icon copy" width="200">
</p>

<p align="center">A ring clone (yes, the doorbell one).</p>

## Table of Contents
- [About The Project](#about-the-project--inspo)
  - [Features](#features)
  - [Tech Used](#tech-used)
  - [What I Learned](#what-i-learned)
- [Setup & Installation](#setup--installation)
  - [Prerequisites](#prerequisites) 
  - [Backend](#backend)
  - [Frontend (client)](#frontend-client)
  - [Camera Appliance](#camera-appliance)
- [Usage](#usage)
- [Contact](#contact)

## About The Project & Inspo
Imagine ring, now hopefully your memory is blurry because you're looking at Rang. 

Anyway, this project aims to replicate some of ring's features and system design. I could've done something _simpler_ :woozy_face: but honestly doing a twitter clone, spotify clone, or a youtube clone is boringggg, like there's tutorials on that. But making a ring clone...  haven't seen a tutorial on it _yet_.

### Features
Some features!

- **Live Video Streaming:** Users can access real-time video feeds from their cameras, allowing them to see visitors remotely.
- **Face Detection:** The system is equipped with an advanced face detection model that alerts users when there is human activity in front of the camera.
- **Supports Multiple Cameras:** Users can add any amount of cameras whether it be a camera monitoring the front door, garage, or back door.
- **Cloud Storage:** Recorded face detection logs, camera device data, and user data is securely stored in the cloud, providing convenient access and retrieval at any time.
- **User Accounts**: Securely create a user profile where you can manage your devices.
- **Mobile App Integration:** The project includes a mobile application that allows users to control and manage their accounts and camera devices from their IOS or Android devices.
<br/>

### Tech Used
Rang uses modern tech, frameworks and libraries. And here it is...

- [**Node.js**](https://nodejs.org/en) for the backend, handling requests, server-side processing and server-side logic.
- [**Firebase**](https://firebase.google.com/) for user authentication, database management, and secure cloud storage.
- [**React Native**](https://reactnative.dev/) for a cross-platform mobile app and consistent user experience.
- [**NativeBase**](https://nativebase.io/) for a more appealing user interface.
- [**OpenCV**](https://opencv.org/) [**(Python)**](https://www.python.org/) for image processing, face recognition, and analysis.
- [**Socket.IO**](https://socket.io/) for fast real-time communication and video streaming.
<br/>

### What I Learned
I learned a ton while developing this clone of ring. Before this project I had never worked with Firebase, OpenCV, WebSockets or React Native (I have used a lot of React tho). Nonetheless, it was great to combine different tech and make something functional and pretty cool. On top of the coding I also looked a bit into systems design/overall architecture of the project. I had to think how I wanted the client, server, and camera(s) to interact with one another and I wanted to make it scalable. A quick example of this would be me realizing that if I wanted users to be able to connect to their camera(s) from anywhere, I would need my server to act kinda like the middleman. I also needed a way to verify the camera devices, so I decided that each camera would be associated with an unique ID which would be coded in the database and in the camera. When users want to add a camera they can enter in the ID and some server-side logic verifies it, then adds it to the user profile. 

_Side Note_ ~ I envisioned that if this were a real product you could have a script to automate ID's being coded in the database and a script to code the ID into the camera. When the user buys a camera it would come with it's unique ID. (I think this is actually how ring does it but users add their doorbell via a QR code) 

<br/>

## Setup & Installation

...

### Prerequisites

...

### Backend

...

### Frontend (client)

...

### Camera Appliance

...

## Usage

...

## Contact

...

## just some notes -- will clean up this readme

### for cameraAppliance
You must have **python 3.7+** (I used python 3.9 while making this, but it should work for python 3.7+)

To set up virtual environemnt (macOS) use...
<br/>
**make sure you're using the correct version of python to set up the environment**
<br/>
- python -m venv env
- source env/bin/activate

<br/>

To install requirements use...
- pip install -r requirements.txt

<br/>

To run the software for the camera use... <br/>
- python3 main.py

### for server

you just need to run
npm install, to install all dependencies

### for client

you just need to run
npm install, to install all dependencies
