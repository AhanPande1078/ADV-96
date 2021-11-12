//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpMm9tTSWzw6IJ5o8i1ctRsND4mWLYN3M",
      authDomain: "kwitter-bad97.firebaseapp.com",
      databaseURL: "https://kwitter-bad97-default-rtdb.firebaseio.com",
      projectId: "kwitter-bad97",
      storageBucket: "kwitter-bad97.appspot.com",
      messagingSenderId: "1064808002980",
      appId: "1:1064808002980:web:7bbd679210f96f5e247d31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
console.log(user_name + "  logged in on  #" + room_name);

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Username: user_name,
            Message: msg,
            Likes: 0
      });
      document.getElementById("msg").value = "";

}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();