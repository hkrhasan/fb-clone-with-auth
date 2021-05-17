import firebase from 'firebase'
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJuknVwVo9FyIpQ0MLWPhUZy-dujPoqNw",
    authDomain: "facebook-clone-30eba.firebaseapp.com",
    projectId: "facebook-clone-30eba",
    storageBucket: "facebook-clone-30eba.appspot.com",
    messagingSenderId: "42789434198",
    appId: "1:42789434198:web:ffc063b545d9c35e681cf7",
    measurementId: "G-WVYNNG4LY3"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = app.firestore();
export const storage = firebase.storage();

export default firebase;