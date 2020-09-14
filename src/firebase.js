import firebase from "firebase" ;

                                
const firebaseConfig = {
  apiKey: "AIzaSyAqHeWSdJJ4q1Iuo0sL1YA0mfF0YgkgPJ4",
  authDomain: "slack-clone-c74b1.firebaseapp.com",
  databaseURL: "https://slack-clone-c74b1.firebaseio.com",
  projectId: "slack-clone-c74b1",
  storageBucket: "slack-clone-c74b1.appspot.com",
  messagingSenderId: "679894396086",
  appId: "1:679894396086:web:69c912e071859a5009ca17",
  measurementId: "G-NBDT7SB53R" ,
};

  const  firebaseApp  = firebase.intializeApp(firebaseConfig);
  const  db  = firebaseApp.firestore();
  const  auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;