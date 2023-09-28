# ChatterFly

![builtwithlove](https://forthebadge.com/images/badges/built-with-love.svg)
 ![react](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![firebase](https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black)



A Messaging Service App made in **React** that allows users a **realtime** text chat experience. Users are required to Signup/Signin using their **email** and **password**. The app provides and **simple, easy-to-use UI**. The database and authentication are handled in **Firebase**.

### **System Design Document** : [View Document](https://drive.google.com/file/d/1Fe3J9cS1DzbEECd3amV9ITCfHFIkJPXz/view?usp=sharing)

# Author Info

**Author**: Diptadip Mallik.\
**University**: Indian Institute of Technology (IIT), Patna.\
**Department**: Chemical and Biochemical Engineering.\
**Roll No**: 2101CB25.
**Institute Mail-ID**: diptadip_2101cb25@iitp.ac.in\
**Personal Mail-ID**:  diptadip2105@gmail.com


##  Steps to Run the App

### Clone the repository
Download the Repository as a zip file and extract it, or open your terminal and type:

    $ git clone https://github.com/Diptadip/ChatterFly

### Firebase configurations
Visit [Firebase console](https://console.firebase.google.com/), Sign in with your Google account and create a new Project. To get the Firebase configuration, follow the steps [here](https://firebase.google.com/docs/web/setup). Copy the and save the firebaseConfig object. Also, create a new Firestore database.

### Set up environment variables.

cd into the directory. Create a **env.js** file in the **src** folder. Paste the copied firebaseConfig object. It should like the following.

    const  firebaseConfig  = {
	    apiKey:  "Your api key",
	    authDomain:  "your auth domain",
	    projectId:  "your projectId",
	    storageBucket:  "your storage bucket url",
	    messagingSenderId:  "your messaging sender Id",
	    appId:  "Your app Id"
	   };
	export { firebaseConfig };

### Install node modules
Open the terminal, cd into the root folder, and run the following command.

    npm install
This will install all the required dependencies.

### Start the App

In the terminal, run the following command.

    npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features of the App

 - Simple, Easy to use UI.
 - Hassle-free authentication using email and password.
 - Lets the user upload a display image or avatar.
 - Provides real-time text chat with other users.
 - Users can search for other available users.
 - Allows sending images.

## TODO

 1. [ ] Group chat feature.
 2. [ ] Option to attach file of any format.
 3. [ ] Voice and video calls.
 4. [ ] AI chatbot integration.
 5. [ ] Option to Update profile.
 6. [ ] Availability status.
 7. [ ] Message forwarding and deletion.
 8. [ ] Privacy features.

## Technologies Used.

 - React for frontend.
 - Sass for stylesheet.
 - Firebase for authetication and database handling.
 - Firestore for storing images. 
 - Follows Atomic design.
 - Uses reusable react Components.
