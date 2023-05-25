# Rang

<p align="center">
  <img src="https://github.com/MoschellaV/RingClone/assets/58868225/e0496f35-8680-4592-b5c1-b1a6c32b82ae" alt="icon copy" width="200">
</p>

<p align="center">A ring clone (yes, the doorbell one).</p>

## 📖 Table of Contents
- [About The Project & Inspo](#-about-the-project--inspo)
  - [Features](#-features)
  - [Tech Used](#-tech-used)
  - [What I Learned](#-what-i-learned)
- [Setup & Installation](#setup--installation)
  - [Start Here](#start-here) 
  - [Back-end](#back-end--firebase)
  - [Frontend (client)](#frontend-client)
  - [Camera Appliance](#camera-appliance)
- [Usage](#usage)
- [Contact](#-contact)
<br/>

## 📄 About The Project & Inspo
Imagine ring, now hopefully your memory is blurry because you're looking at Rang. 

Anyway, this project aims to replicate some of ring's features and system design. I could've done something _simpler_ :woozy_face: but honestly doing a twitter, spotify, or a youtube clone is boringggg, like there's tutorials on that. But making a ring clone...  haven't seen a tutorial on it _yet_.

<br/>

### 🚀 Features
Some features!

- **Live Video Streaming:** Users can access real-time video feeds from their cameras, allowing them to see visitors remotely.
- **Face Detection:** The system is equipped with an advanced face detection model that alerts users when there is human activity in front of the camera.
- **Supports Multiple Cameras:** Users can add any amount of cameras whether it be a camera monitoring the front door, garage, or back door.
- **Cloud Storage:** Recorded face detection logs, camera device data, and user data is securely stored in the cloud, providing convenient access and retrieval at any time.
- **User Accounts**: Securely create a user profile where you can manage your devices.
- **Mobile App Integration:** Mobile app for both IOS and Andriod users.
<br/>

### 💻 Tech Used
Rang uses modern tech, frameworks, and libraries. And here it is...

- [**Node.js**](https://nodejs.org/en) for the backend, handling requests, server-side processing and server-side logic.
- [**Firebase**](https://firebase.google.com/) for user authentication, database management, and secure cloud storage.
- [**React Native**](https://reactnative.dev/) for a cross-platform mobile app and consistent user experience.
- [**NativeBase**](https://nativebase.io/) for a more appealing user interface.
- [**OpenCV**](https://opencv.org/) [**(Python)**](https://www.python.org/) for image processing, face recognition, and analysis.
- [**Socket.IO**](https://socket.io/) for fast real-time communication and video streaming.
<br/>

### 🧠 What I Learned
I learned a ton while developing this clone of ring. Before this project I had never worked with Firebase, OpenCV, WebSockets or React Native (I have used a lot of React tho). Nonetheless, it was great to combine different tech and make something functional and pretty cool. On top of the coding I also looked a bit into systems design/overall architecture of the project. I had to think how I wanted the client, server, and camera(s) to interact with one another and I wanted to make it scalable. A quick example of this would be me realizing that if I wanted users to be able to connect to their camera(s) from anywhere, I would need my server to act kinda like the middleman. I also needed a way to verify the camera devices, so I decided that each camera would be associated with an unique ID which would be written into the database and coded in the camera. When users want to add a camera they can enter in the ID and some server-side logic verifies it, then adds it to the user profile. 

_Side Note_ ~ I envisioned that if this were a real product you could have a script to automate ID's being written into the database and another script to code the ID into the camera. When a customer buys a camera it would come with it's unique ID. (I think this is actually how ring does it but users add their doorbell via QR code) 

<br/>

## Setup & Installation

### Start Here
Want to set it up? Just follow this portion of the ReadMe _in order_.

<br/>

### Prerequisites
You're gonna need some stuff first...
<br/>
<br/>
To start make sure you have node.js. (I'm mentioning it up here because **you need it for both the front and back end**.)
1. **Install Node.js**: make sure you are using `node.js` version `>= v16.16.0` and `npm` version `>=8.11.0` .If you don't have it node, install it [here](https://nodejs.org/en).

#### Prerequisites ~ Back-end & Firebase
2. **Google Account**: make sure you have a google account because we will be using it for `Firebase` later.

#### Prerequisites ~ Frontend (client)
3. **Expo**: letting you know this project uses `expo` but you won't need to install anything since it leverages npx, you can read more about it [here](https://docs.expo.dev/get-started/installation/#recommended-tools).
4. **Emulator**: make sure you have an emulator either `iOS` or `Android`. I would strongly recommend the [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) or [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/).

#### Prerequisites ~ Camera Appliace 
5. **Python**: ensure you have `python 3.9+`

<br/>

### Cloning
Next, clone the repo. <br/>
Move to whatever directory you want to clone into and run:
```
git clone https://github.com/MoschellaV/RingClone.git
```
<br/>

### Back-end & Firebase

...

### Frontend (client)

...

### Camera Appliance

...

## Usage

...

## 📨 Contact
Got questions? Feel free to reach out!

- [Email](mailto:vincemoschella04@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/moschellav/)

You can also open an issue on this GitHub repo if you find any problems.

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
