import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAk5e1uzKBrZ1UX2VluRtDhp5Cb1qJN32o",
    authDomain: "solvers-d1a37.firebaseapp.com",
    projectId: "solvers-d1a37",
    storageBucket: "solvers-d1a37.appspot.com",
    messagingSenderId: "531603767778",
    appId: "1:531603767778:web:f136698e6c60921ec939bb"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };