import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig ={
    apiKey: '',
    authDomain: '',
    projecId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);