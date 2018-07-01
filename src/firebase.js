import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAYYfKb3jgejzViw5q8McPBpynob_AvvUI',
  authDomain: 'movie-list-72586.firebaseapp.com',
  databaseURL: 'https://movie-list-72586.firebaseio.com',
  projectId: 'movie-list-72586',
  storageBucket: 'movie-list-72586.appspot.com',
  messagingSenderId: '787866893340'
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;