import { decorate, observable, computed, action, extendObservable } from 'mobx';
import { fromPromise } from 'mobx-utils';
import Cookie from 'mobx-cookie';

class AuthStore {
  constructor(store) {
    this.store = store;
    extendObservable(this, {
      token: new Cookie('token'),
    });
  }

  // Observables
  userID;
  sessionStatus;

  // Computed
  get isLoggedIn() {
    return Boolean(this.token.get());
  }

  // Actions
  signUp = async params => {
    const sessionPromise = this.store.api.user.signup(params);
    this.sessionStatus = fromPromise(sessionPromise);
    const res = await sessionPromise;

    // Do stuff
  };

  login = async params => {
    const sessionPromise = this.store.api.user.login(params);
    this.sessionStatus = fromPromise(sessionPromise);
    const res = await sessionPromise;
    this.handleAuth(res.data);
  };

  handleAuth = data => {
    this.setToken(data.auth_token);
  };

  setToken = token => {
    this.token.set(token, { expires: 7 });
  };

  reset = () => {
    this.setToken(null);
    this.sessionStatus = null;
  };
}

decorate(AuthStore, {
  sessionStatus: observable,
  isLoggedIn: computed,
  signUp: action,
  login: action,
  handleAuth: action,
  setToken: action,
  reset: action,
});

export default AuthStore;
