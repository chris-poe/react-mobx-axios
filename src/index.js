import React from 'react';
import ReactDOM from 'react-dom';

import './app/styles';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
