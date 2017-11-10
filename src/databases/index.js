import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhQ671Ssfp7lKOGTKRXOHY3gbnF0cQ0Zs",
    authDomain: "anoko-aafbe.firebaseapp.com",
    databaseURL: "https://anoko-aafbe.firebaseio.com",
    projectId: "anoko-aafbe",
    storageBucket: "anoko-aafbe.appspot.com",
    messagingSenderId: "492268233165"
}
Firebase.initializeApp(config);
export const database = Firebase.database();
export const storage = Firebase.storage().ref();
export const auth = Firebase.auth();

export const UPLOAD_PRESET = 'testPreset1';
export const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/duqn30c4x/image/upload';