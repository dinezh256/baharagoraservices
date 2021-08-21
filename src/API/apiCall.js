import firebase from "firebase/app";
import { useState, useEffect } from "react";

export default function API() {
  const [professionData, setProfessionData] = useState("");

  useEffect(() => {
    const config = {
      apiKey: "AIzaSyB-0CE7u7zs7pqYtUIArpJ6epmOFT8Glak",
      authDomain: "baharagoraservices.firebaseapp.com",
      databaseURL: "https://baharagoraservices.firebaseio.com/",
      storageBucket: "baharagoraservices.appspot.com",
    };

    firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

    const dataRef = firebase.database().ref("main");
    dataRef.on("value", (snapshot) => {
      setProfessionData(snapshot.val());
    });
  }, []);

  return { professionData };
}
