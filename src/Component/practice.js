const fetch = require("node-fetch");
// async function getData(val) {
//   //after using async before a function ,function return a promise object
//   // let myPromise = new Promise(function(myResolve, myReject) {
//   //     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   //   });               //return promise object
//   //   document.getElementById("demo").innerHTML = await myPromise;

//   return val;
// }
// async function displayer(val) {
//   return val;
// }
// getData("jemish").then((val) => {
//   displayer(val + " italiya").then((val) => {
//     val = val + " karshnbhai";
//     console.log(val);
//   });
// });

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("helloji");
//   }, 5000);
// });
// myPromise.then((val) => {
//   console.log(val);
// });

console.log("hey I am here");

async function party() {
  console.log("hey");
  const time = await "night";
  console.log(time);
  return "on " + time;
}
var time = "time is not defined";
console.log(time);

party().then((res) => {
  time = res;
  console.log(res);
});
console.log("I know the time of party");

console.log(
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
);
