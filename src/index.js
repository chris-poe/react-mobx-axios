import React from 'react';
import ReactDOM from 'react-dom';

import './app/global';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
