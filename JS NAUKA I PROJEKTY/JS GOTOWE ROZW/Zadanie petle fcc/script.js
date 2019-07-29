//Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  let i = 0;
  let result = "";
  let j = 0;

  while (i < contacts.length) {
    if (contacts[i].firstName !== name) {
      j++;

      if (j >= contacts.length) {
        console.log(j);
        result = "No such contact";
      }
    }
    if (contacts[i].firstName == name && contacts[i][prop] !== undefined) {
      result = name && contacts[i][prop];
    }

    if (contacts[i].firstName !== name && contacts[i][prop] == undefined) {
      result = "No such property";
    }

    i++;
  }
  console.log(result);
  return result;
}

// Change these values to test your function
lookUpProfile("Sherlok", "likes");

// If name does not correspond to any contacts then return "No such contact"

// If prop does not correspond to any valid properties of a contact found to match name then return "No such property"

// "Kristian", "lastName" should return "Vos"
// "Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
// "Harry","likes" should return an array
// "Bob", "number" should return "No such contact"
// "Bob", "potato" should return "No such contact"
// "Akira", "address" should return "No such property"

// strasznie pojebane to wyszlo! i napewno da sie to lepiej zrobic!
