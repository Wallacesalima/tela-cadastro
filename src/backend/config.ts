import firebase from "firebase";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apikey: "AIzaSyCPUjiPMsBwyltIXKpPs7eQDL290hQUHEc",
        authDomain: "tela-cadastro-4b2c5.firebaseapp.com" ,
        projectId: "tela-cadastro-4b2c5" ,
    })
}

export default firebase