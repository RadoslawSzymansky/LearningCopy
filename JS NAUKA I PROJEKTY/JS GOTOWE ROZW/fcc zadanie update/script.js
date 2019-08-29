// Setup
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    console.log("dzialam");
    collection[id][prop] = value;
  } else if (prop == "tracks" && collection[id][prop] == undefined) {
    console.log("prop to track ale nie ma go");

    collection[id][prop] = [];
    collection[id][prop].push(value);
  } else if (prop == "tracks" && value !== "") {
    console.log("prop to track i value inne niz pusty");

    collection[id][prop].push(value);
  }
  if (value == "") {
    console.log("value puste, usun cala zawartosc");

    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

console.log(updateRecords(5439, "artist", "ABBA"));