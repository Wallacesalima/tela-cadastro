import firebase from "firebase";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN ,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID ,
    })
}

export default firebase