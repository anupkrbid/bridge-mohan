import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

const firebaseConfig = {
  apiKey: 'AIzaSyDv2hWRWhB9TQmoYpGk1MXKTAxQLxSVsxg',
  authDomain: 'bridge-mohan.firebaseapp.com',
  databaseURL: 'https://bridge-mohan.firebaseio.com',
  projectId: 'bridge-mohan',
  storageBucket: 'bridge-mohan.appspot.com',
  messagingSenderId: '252104001383'
};

firebase.initializeApp(firebaseConfig);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
