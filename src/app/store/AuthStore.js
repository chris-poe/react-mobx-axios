import { decorate } from 'mobx';
import { fromPromise } from 'mobx-utils';

class AuthStore {
  constructor(store) {
    this.store = store;
  }
}

decorate(AuthStore, {});

export default AuthStore;
