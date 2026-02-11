// Firebase Configuration
// TODO: Replace with your Firebase project config from Firebase Console

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",

    // 🎯 Client ID - Unique identifier for each landing page client
    // Change this for each client (e.g., "yossi-cohen", "sara-levy", "danny-golan")
    // All clients can use the SAME Firebase project!
    clientId: "demo-client"
};

export default firebaseConfig;
