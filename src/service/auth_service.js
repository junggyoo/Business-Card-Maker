import firebase from "firebase";
import firebaseApp from "./fbase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  async logout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  }

  async onAuthChange(onUserChanged) {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        onUserChanged(user);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthService;
