import { firebaseAuth, googleProvider, githubProvider } from "./fbase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  async logout() {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  async onAuthChange(onUserChanged) {
    try {
      firebaseAuth.onAuthStateChanged((user) => {
        onUserChanged(user);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
