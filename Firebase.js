import * as Firebase from "firebase";

const config={
    apiKey: "AIzaSyAX-G1FkPKL8x0_h27OUFQnCQPKj8mVLz0",
    authDomain: "camx-f7ee7.firebaseapp.com",
    databaseURL: "https://camx-f7ee7.firebaseio.com",
    projectId: "camx-f7ee7",
    storageBucket: "camx-f7ee7.appspot.com",
    messagingSenderId: "95641955299",
    appId: "1:95641955299:web:5344faaa9b22ec90"
}

const Firebase = firebase.initializeApp(config);
export default Firebase;