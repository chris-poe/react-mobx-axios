import createApi from '../services/api';
import AuthStore from './AuthStore';

class Store {
	constructor(config) {
		this.config = config;

		this.AuthStore = new AuthStore(this);
		
		this.api =  createApi({
			config: config.api
		});
	}
}

export default Store;
