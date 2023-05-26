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
- [Setup & Installation](#-setup--installation)
  - [Start Here](#-start-here) 
  - [Frontend & Firebase](#-frontend--firebase)
  - [Back-end](#-back-end)
  - [Camera Appliance](#-camera-appliance)
  - [Running It All](#-running-it-all)
- [Usage](#-usage)
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
- **Mobile App Integration:** Mobile app for both iOS and Andriod users.
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

## 🛠️ Setup & Installation

### 🎯 Start Here
Want to set it up? Just follow this portion of the ReadMe _in order_.

<br/>

### 📋 Prerequisites
You're gonna need some stuff first...
<br/>
<br/>
To start make sure you have node.js. (I'm mentioning it up here because **you need it for both the front and back end**.)
1. **Install Node.js**: make sure you are using `node.js` version `>= v16.16.0` and `npm` version `>=8.11.0` .If you don't have it node, install it [here](https://nodejs.org/en).

#### Prerequisites ~ Firebase
2. **Google Account**: make sure you have a google account because we will be using it for `Firebase` later.

#### Prerequisites ~ Frontend
3. **Expo**: letting you know this project uses `expo` but you won't need to install anything since it leverages npx, you can read more about it [here](https://docs.expo.dev/get-started/installation/#recommended-tools).
4. **Emulator**: make sure you have an emulator either `iOS` or `Android`. I would strongly recommend the [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) or [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/).

#### Prerequisites ~ Camera Appliace 
5. **Python**: ensure you have `python 3.9+`
<br/>

### 🔄 Cloning
Next, clone the repo. <br/>
Move to whatever directory you want to clone into and run:
```
git clone https://github.com/MoschellaV/RingClone.git
```
<br/>

### 🌐 Frontend & Firebase
From the root directory move into the `/client` folder.
```
cd client
```
Next, install all packages and dependencies.
```
npm install
```

Now we have to set up Firebase.
1. Make sure you're signed into your Google Account.
2. Go to the [firebase page here.](https://firebase.google.com/)
3. Click `Get started`.
4. Click `Add project` and follow the steps, the name does not matter, and you can disable google analytics.
5. Click the `</>` icon to add Firebase to your web app.

   <img width="500" alt="create_web_app" src="https://github.com/MoschellaV/RingClone/assets/58868225/bb7ae4b0-31f1-4e39-8b91-a8e2d5311c4d">

6. Now choose a name (anything), leave Firebase Hosting unchecked and register the app.
7. Now you only need the firebaseConfig so copy it and save it somewhere (like a notepad). 

   <img width="484" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/44cf2d16-e7b8-4abf-88a5-5b352cd07644"> 

8. Create a `.env` file in the `/client` folder.

   <img width="290" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/a21e5cea-c476-4611-876e-7d0f6f593857">

9. Paste the following in the `.env` file.
    ```env
    FIREBASE_API_KEY=your_key_here
    FIREBASE_AUTH_DOMAIN=your_key_here
    FIREBASE_PROJECT_ID=your_key_here
    FIREBASE_STORAGE_BUCKET=your_key_here
    FIREBASE_MESSAGE_SENDER_ID=your_key_here
    FIREBASE_APP_ID=your_key_here
    ```
10. For each variable replace `your_key_here` with the corresponding key from the firebaseConfig in step 7.
11. Setup Firebase Auth.
    - Go to the firebase console and click `Authentication`. 
    
    <img width="500" alt="auth_button" src="https://github.com/MoschellaV/RingClone/assets/58868225/ea400ad0-9b42-4017-81ea-71365440aaba">
    
    - Click `Get started`.
    
    <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/383840a3-d0b5-448f-906d-3f53bb34bb75">
    
    - Select Email/Password as the sign-in method.
    
    <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/16e52449-e3db-45c5-8ab6-6aa60a97d1dc">
    
    - Enable Email/Password
    
    <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/b2dd4b92-abce-4893-9449-e9e9c7b15b93">
    
12. Setup Firestore.
 - Go to the firebase console and click `Cloud Firestore`.
 
 <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/38eddc27-f36e-4c1a-81a0-0bc7d5adc7ec">

 - Click `Create Database`.
 
 <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/028139bd-0ec6-49d5-a694-4b65104c37c4">
 
 - When prompted with read/write rules check `Start in production mode` and then select **your region**.

<br/>

### ⚙ Back-end 
From the root directory move into the `/backend` folder.
```
cd backend
```
Next, install all packages and dependencies.
```
npm install
```

Now we have to setup firebase admin.
1. Navigate to your app's settings.

   <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/2b7e2187-1df6-4d5e-9d16-6b7c963ea059">
   <img width="500" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/790e24d8-5b02-4fdc-b982-6db501d16d6a">

2. Using the tabs navigate to `Service accounts`, then click `Generate new private key`.

   <img width="700" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/12714383-0637-4d3f-bb1d-d7f2739c7bc7">

3. Download the generated key, open the `.json` file and copy all the contents.
4. Create a file called `serviceAccountKey.json` in the `/backend/Firebase` directory and paste the contents of the generated key in that file.
 
   <img width="250" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/0b65b698-8f69-4561-bdc9-5595e67cb991">

<br/>

### 📸 Camera Appliance
Move into the `/cameraAppliance` directory with:
```
cd cameraAppliance
```

Now we need to set up and activate the virtual environemnt. <br/>
**make sure you're using the correct version of python to set up the environment**
<br/>To do so use...
```
python -m venv env

# windows
env/Scripts/activate

# macOS/WSL
source env/bin/activate
```
<br/>

To install requirements use...
```
pip install -r requirements.txt
```
<br/>

### 🎬 Running It All
Now that everything is set up, we can start up the project.

<br/>

But first we need to add our camera to the database, I mentioned this in the [What I Learned](#-what-i-learned) section.
1. Navigate to `/cameraAppliance/device_CONFIG.py` and copy the ID that I left there.
2. Now go into the Firestore database in Firebase.
3. Click `Start collection` and name the collection `devices` <-- exactly like that, no caps.
4. Paste the device_Id into the document ID and then you can make up any field and value for that document (see below as exemplar).

  <img width="450" alt="image" src="https://github.com/MoschellaV/RingClone/assets/58868225/766c6127-4d50-4dae-874e-e5fcbd15ef02">

5. **IMPORTANT** If you want to add multiple camera's, duplicate the `cameraAppliance/` folder, and change the `device_id` in `device_CONFIG.py` to a new ID. Then follow the same steps as above, adding it into the database.

<br/>

#### Starting up Back-end
First we will start the back-end.<br/>
Open a new terminal  in the root directory and `cd backend`.<br/>
Run the following to start the server...
```
npm start
#you can also use nodemon if you happen to have it installed
```
<br/>

#### Starting up Frontend
Next the frontend with.<br/>
Open a new terminal and `cd client`. <br/>
Then run the following...
```
npx expo start

#Next, view the options (in the terminal) presented by expo and press a or i depending on which emulator you're using.
i
#OR
a
```
<br/>

#### Starting up Camera
And finally we can start the camera.<br/>
Open a new terminal and `cd cameraAppliance`. <br/>
_Make sure you're in your virtual environemnt_
```
# To Activate Virtual Env
# windows
env/Scripts/activate

# macOS/WSL
source env/bin/activate
```
To run the software for the camera use...
```
python main.py OR python3 main.py 
```

## 🧰 Usage
To use the app, you must fist make an account, you can click `Sign Up` to do so.<br/>
Once you have an account, you can go to your `Profile` and `Add Device`.<br/>
Now log out and log back in. <br/>
You should now see a video icon in the `Live Video` tab, click on it to view the live stream from your camera (you're camera needs to be running in case you closed it). You should also be able to see all the detection logs in the `Detection Logs` tab.


## 📨 Contact
Got questions? Feel free to reach out!

- [Email](mailto:vincemoschella04@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/moschellav/)

You can also open an issue on this GitHub repo if you find any problems.
