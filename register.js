
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAqTKbd-eAACLJQP7YH98KYJJgV2mD_X3k",
    authDomain: "realdb-8da69.firebaseapp.com",
    projectId: "realdb-8da69",
    storageBucket: "realdb-8da69.appspot.com",
    messagingSenderId: "301396870156",
    appId: "1:301396870156:web:4fbb96e4b067e6617b5a29",
    measurementId: "G-NYY2V8BPVJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 import{getDataBase,set,get,update,remove,ref,child} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"
const db=getdDataBase();
 var entername=document.get   
  const analytics = getAnalytics(app);