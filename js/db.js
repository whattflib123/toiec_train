import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAL9_ZyQ3klAP4VXeYvCAtAHvEh0_zxJcY",
  authDomain: "toeic-train-7a43c.firebaseapp.com",
  projectId: "toeic-train-7a43c",
  storageBucket: "toeic-train-7a43c.firebasestorage.app",
  messagingSenderId: "76407531332",
  appId: "1:76407531332:web:7320b75261877bfc059911"
};

const fbApp = initializeApp(firebaseConfig);
const db = getFirestore(fbApp);

window.DB = {
  async loadUser(username) {
    try {
      const snap = await getDoc(doc(db, 'users', username));
      return snap.exists() ? snap.data() : null;
    } catch(e) {
      console.warn('[DB] loadUser failed:', e);
      return null;
    }
  },
  async saveUser(username, data) {
    try {
      await setDoc(doc(db, 'users', username), { ...data, updatedAt: Date.now() }, { merge: true });
    } catch(e) {
      console.warn('[DB] saveUser failed:', e);
    }
  }
};

window.dispatchEvent(new Event('db-ready'));
