/*
    You need to extract the following data from the JSON file:
    1. All topping types
    2. All batter types
    3. Ppu average
    4. Ppu sum
    5. List of all mentioned IDs regardless to the type
        * for every one create a function that return specific type of data
*/

// Hend Isleem 220171091 Java script homework
let data = require("./hw.json");

function AllToppingTypes() {
  var toppings = {};
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].topping.length; j++) {
      toppings[data[i].topping[j].type] = 0;
    }
  }
  return Object.keys(toppings);
}
// return an array of all topping types
// console.log(AllToppingTypes());

function AllBatterTypes() {
  var batterss = {};
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].batters.batter.length; j++) {
      batterss[data[i].batters.batter[j].type] = 0;
    }
  }
  return Object.keys(batterss);
}
// return an array of all batter types
// console.log(AllBatterTypes());

function PpuAverage() {
  var sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].ppu;
  }
  return sum / data.length;
}
// return a double avg
// console.log(PpuAverage());

function PpuSum() {
  var sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].ppu;
  }
  return sum;
}
// return a double sum
// console.log(PpuSum());

function AllIDs() {
  var Ids = {};
  for (let i = 0; i < data.length; i++) {
    Ids[data[i].id] = 0;
    for (let j = 0; j < data[i].batters.batter.length; j++) {
      Ids[data[i].batters.batter[j].id] = 0;
    }
    for (let j = 0; j < data[i].topping.length; j++) {
      Ids[data[i].topping[j].id] = 0;
    }
  }
  return Object.keys(Ids);
}
// return an array of all IDs
// console.log(AllIDs());
