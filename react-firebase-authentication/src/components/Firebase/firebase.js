import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDddbEZRvSauQJbonvJpppt7edRnffbTfg",
  authDomain: "t4sg-b179f.firebaseapp.com",
  databaseURL: "https://t4sg-b179f-default-rtdb.firebaseio.com",
  projectId: "t4sg-b179f",
  storageBucket: "t4sg-b179f.appspot.com",
  messagingSenderId: "897696115519",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();
  
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
 
export default Firebase;
