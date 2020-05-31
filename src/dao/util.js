import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBmsMD2o42PwfIhFAXU3OPZsiColQuw5HI",
    authDomain: "conquali-rn-712d3.firebaseapp.com",
    databaseURL: "https://conquali-rn-712d3.firebaseio.com",
    projectId: "conquali-rn-712d3",
    storageBucket: "conquali-rn-712d3.appspot.com",
    messagingSenderId: "897306859861",
    appId: "1:897306859861:web:b9ffab473380ba11"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();