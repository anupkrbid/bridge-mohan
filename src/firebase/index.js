import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDv2hWRWhB9TQmoYpGk1MXKTAxQLxSVsxg',
  authDomain: 'bridge-mohan.firebaseapp.com',
  databaseURL: 'https://bridge-mohan.firebaseio.com',
  projectId: 'bridge-mohan',
  storageBucket: 'bridge-mohan.appspot.com',
  messagingSenderId: '252104001383'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
