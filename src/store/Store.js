import createApi from '../services/api';
import UiStore from './UiStore';
import AuthStore from './AuthStore';

class Store {
  constructor(config) {
    this.config = config;

    this.uiStore = new UiStore(this);
    this.authStore = new AuthStore(this);

    this.api = createApi({
      config: config.api,
    });
  }
}

export default Store;
