// Add destination that incluces location, landmarks, time of year, notes

// Create constructor for destination
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//Update destination properties
function updateDestination(newLocation, newLandmarks, newTimeOfYear, newNotes) {
  this.location = newLocation;
  this.landmarks = newLandmarks;
  this.timeOfYear = newTimeOfYear;
  this.notes = newNotes;
}

// Create constructor for places
function Places() {
  this.destinations = {};
  this.currentId = 0
}

// Add destination to places
Places.prototype.addDestination = function(destination){
  // this.destinations[destination.location] = destination;
  destination.id = this.addId();
  this.destinations[destination.id] = destination
}

//Add Unique ID to each destination
Places.prototype.addId = function() {
  this.currentId += 1;
  return this.currentId;
}

//Function to delete destinations
Places.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
}


//UI LOGIC
function handleSubmission(places) {
  // Retrieve user inputs
  const loc = document.getElementById("location").value;
  const landmarks = []
  // For each landmark entry, push landmark to array landmarks
  for (i = 1; i < 4; i++) {
    let landmark = document.getElementById("landmark" + i).value;
    if (landmark) {
      landmarks.push(landmark);
    }
  }
  const time = document.getElementById("timeOfYear").value;
  const notes = document.getElementById("notes").value;
  console.log("location: " + loc)
  console.log("landmarks: " + landmarks)
  console.log("time of year: " + time)
  console.log("notes: " + notes)
  // Create new destination
  let newDestination = new Destination(loc, landmarks, time, notes);
  // Add destination to places
  places.addDestination(newDestination);
  console.log(places.destinations);

  // return places;
};

function displayCity(city) {
  const list = document.createElement("ul");
  const listItem = document.createElement("li");
  const body = document.querySelector("body");
  listItem.append(city);
  list.append(listItem);
  body.append(list);
}

// Initialize places
let places = new Places();

window.addEventListener("load", function(){
  console.log(places)
  // Listen for submit
  const form = document.querySelector("form");
  form.addEventListener("submit", function() {
    event.preventDefault();
    // Retrieve user inputs
    handleSubmission(places);
    console.log(places)
    let cityIndex = places.currentId
    displayCity(places.destinations[cityIndex]["location"]);
    // Add destination to places
  });
});
// Display those properties when a user clicks on a place's name.
