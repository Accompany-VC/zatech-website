import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebase.js';

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize only Firestore (no auth needed for anonymous reports)
export const db = getFirestore(app);

// Connect to emulator in development (optional)
// if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
//   // Uncomment next line to use Firestore emulator in development
//   // connectFirestoreEmulator(db, 'localhost', 8080);
// }

export default app;