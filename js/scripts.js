// Add destination that incluces location, landmarks, time of year, notes

// Create constructor for destination
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// Create constructor for places
function Places() {
  this.destinations = {};
}

// Add destination to places
Places.prototype.addDestination = function(destination){
  this.destinations[destination.location] = destination;
}