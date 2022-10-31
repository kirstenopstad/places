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