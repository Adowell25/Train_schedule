// Steps to complete:
// 1. Create Firebase link
// 2. Create initial train data in database
// 3. Create button for adding new trains - then update the html + update the database
// 4. Create a way to retrieve trains from the trainlist.
// 5. Create a way to calculate the time way. Using difference between start and current time.
//    Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)

var firebaseConfig = {
    apiKey: "AIzaSyC4H2mtMff4WApE32sPhXKOR8rANe8ruP8",
    authDomain: "trains2-86a7e.firebaseapp.com",
    databaseURL: "https://trains2-86a7e.firebaseio.com",
    projectId: "trains2-86a7e",
    storageBucket: "trains2-86a7e.appspot.com",
    messagingSenderId: "483250297921",
    appId: "1:483250297921:web:a01d996cdf587e74a97ac0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //create DB
  var trainData = firebase.database();

  var count=0;

  $("#add-train-btn").on("click",function(e){
    e.preventDefault();
    //create the rest of the inputs
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();


    console.log(trainName);

    var trainDB = {
        trainName: trainName,
        trainDest: trainDest
    }

    trainData.ref().push(trainDB);
  })

  trainData.ref().on("child_added", function(childSnapshot, prevChildKey){
      console.log(childSnapshot.val());

      var tName = childSnapshot.val().trainName;

//grab table data and append to table body a row when train is added to database

    $("#train-table >tbody").append(
        $("<tr>").append(
            $("<td>").text(tName)
        )
    
    )
  })