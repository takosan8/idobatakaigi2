import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXIfqYCooyvCZDy8JKCtqo9wzu-0mb_NA",
    authDomain: "idobatakaigi-with-ham-d4604.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-d4604",
    storageBucket: "idobatakaigi-with-ham-d4604.appspot.com",
    messagingSenderId: "866691684362",
    appId: "1:866691684362:web:5dac0b63002bc042dce7f3"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messagesRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
      messagesRef.push({name, text})
  }
