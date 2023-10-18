//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAX1lHo3Hutey3cvpfbXe-ZhiEoCo4V2Lc",
    authDomain: "net1-b50ca.firebaseapp.com",
    databaseURL: "https://net1-b50ca-default-rtdb.firebaseio.com",
    projectId: "net1-b50ca",
    storageBucket: "net1-b50ca.appspot.com",
    messagingSenderId: "268019906670",
    appId: "1:268019906670:web:66e3527467232b5c3a0e7f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function logout(){
    window.location="index.html"
}
