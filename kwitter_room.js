var firebaseConfig = {
    apiKey: "AIzaSyDp9AcOn-JaeT0iCnwjZEScnyQRL4qeTQE",
    authDomain: "kwitter-e65a8.firebaseapp.com",
    databaseURL: "https://kwitter-e65a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-e65a8",
    storageBucket: "kwitter-e65a8.appspot.com",
    messagingSenderId: "265859040194",
    appId: "1:265859040194:web:b549c6659de610e0844c5b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"  
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}
