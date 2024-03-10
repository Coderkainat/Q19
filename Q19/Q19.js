// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestArr = ["hassan", "Rizwan", "shayan"];
var canNotattend = "Waseem";
var newGuest = "Fahad";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("hamza");
var middleGuest = "Ali";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wasay");
// console.log(guestArr);
console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");
