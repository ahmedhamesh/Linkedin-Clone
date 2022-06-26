import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAcmWzn7JQrPIJdSgNdN0aMAucCv7Ctx88",
    authDomain: "dummy-linkedin-clone-ad293.firebaseapp.com",
    projectId: "dummy-linkedin-clone-ad293",
    storageBucket: "dummy-linkedin-clone-ad293.appspot.com",
    messagingSenderId: "162189699810",
    appId: "1:162189699810:web:abffd8179fc51f67960cbb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage() ;

export { auth,provider,storage };
export default db;