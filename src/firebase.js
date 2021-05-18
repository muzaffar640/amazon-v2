import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZ304lvaA9EQoS223NLjxzzWm4IOY45FI",
    authDomain: "v2-e1bea.firebaseapp.com",
    projectId: "v2-e1bea",
    storageBucket: "v2-e1bea.appspot.com",
    messagingSenderId: "635239267500",
    appId: "1:635239267500:web:e1f2562c6190ed59f93309",
    measurementId: "G-K9YDED2C17",
});

const auth = firebase.auth();

export { auth };


// import firebase from 'firebase';

// FIREBASE STARTING TEMPLATE

// const firebaseApp = firebase.initializeApp({
//     CONFIG DETAILS FROM FIREBASE
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };