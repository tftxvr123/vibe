import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push, onChildAdded, remove, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjve9Lpih3Tl4mNGn1gxdZ6RQqONs7Bo4",
    authDomain: "vibe-78d6f.firebaseapp.com",
    databaseURL: "https://vibe-78d6f-default-rtdb.firebaseio.com",
    projectId: "vibe-78d6f",
    storageBucket: "vibe-78d6f.firebasestorage.app",
    messagingSenderId: "676783066321",
    appId: "1:676783066321:web:4b9535e39559df464b09f0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider, signInWithPopup, ref, set, onValue, push, onChildAdded, remove, get, onAuthStateChanged, signOut };

export const getMyUID = () => {
    let id = localStorage.getItem('vibe_temp_id');
    if (!id) {
        id = 'u' + Math.random().toString(36).substr(2, 7);
        localStorage.setItem('vibe_temp_id', id);
    }
    return id;
};
