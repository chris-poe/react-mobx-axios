import { decorate } from 'mobx';

class UiStore {
  constructor(store) {
    this.store = store;
  }
}

decorate(UiStore, {});

export default UiStore;
