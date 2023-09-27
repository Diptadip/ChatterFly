# ChatterFly

![builtwithlove](https://forthebadge.com/images/badges/built-with-love.svg)
 ![react](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![node](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![firebase](https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black)



A Messaging Service App made in **React** that allows users a **realtime** text chat experience. Users are required to Signup/Signin using their **email** and **password**. The app provides and **simple, easy to use UI**. The databse and authentication is handled in **Firebase**.

# Author Info

**Author**: Diptadip Mallik.
**University**: Indian Institute of Technology (IIT), Patna.
**Department**: Chemical and Biochemical Engineering.
**Roll No**: 2101CB25.

##  Steps to Run the App

### Clone the repoistory
Download the Repository as a zip file and extract it or open your terminal and type:

    $ git clone https://github.com/Diptadip/ChatterFly

### Firebase configurations
Visit [Firebase console](https://console.firebase.google.com/) , Sign in with your google account and create a new Project. Follow the steps [here](https://firebase.google.com/docs/web/setup) to get the firebase configuration. Copy the and save the firebaseConfig object. Also create a new firestore database.

### Set-up environment variables.

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
Open the terminal, cd into the root folder, run the following command.

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
 - Hassle free authentication using email and password.
 - Lets user upload a display image or avatar.
 - Provides realtime text chat with other users.
 - Users can search other available users.
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
