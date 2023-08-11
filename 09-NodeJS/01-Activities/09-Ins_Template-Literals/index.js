const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const getAllegiance = char => char.allegiance;

const greeting = `My name is ${arya.first}!
I am loyal to ${getAllegiance(arya)}.`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.