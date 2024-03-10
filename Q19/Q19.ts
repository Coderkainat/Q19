// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestArr = ["hassan", "Rizwan", "shayan"];
let canNotattend = "Waseem";
let newGuest = "Fahad";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("hamza");
let middleGuest = "Ali";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Wasay");
// console.log(guestArr);
console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");