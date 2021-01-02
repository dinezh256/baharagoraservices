import firebase from "firebase";
import { useState, useEffect } from "react";

export default function ProfessionPageImagesAPI() {
  const [imagesData, setImagesData] = useState({});

  useEffect(() => {
    const config = {
      apiKey: "AIzaSyB-0CE7u7zs7pqYtUIArpJ6epmOFT8Glak",
      authDomain: "baharagoraservices.firebaseapp.com",
      databaseURL: "https://baharagoraservices.firebaseio.com/",
      storageBucket: "baharagoraservices.appspot.com",
    };

    firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

    const imagesRef = firebase.database().ref("images/professionPage");
    imagesRef.on("value", (snapshot) => {
      setImagesData(snapshot.val());
    });
  }, []);

  return imagesData;
}
