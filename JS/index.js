const a = 1;
const b = "string";
const c = true;
const d = null;
let e;
const f = ["what", "is", "my", "type"];

const numberBox = document.getElementById("number");
const stringBox = document.getElementById("string");
const booleanBox = document.getElementById("boolean");
const nullBox = document.getElementById("null");
const undefinedBox = document.getElementById("undefined");
const objectBox = document.getElementById("object");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(d);
console.log(typeof e);
console.log(typeof f);

numberBox.querySelector(".name").innerText = `${(typeof a)}`;
stringBox.querySelector(".name").innerText = `${(typeof b)}`;
booleanBox.querySelector(".name").innerText = `${(typeof c)}`;
nullBox.querySelector(".name").innerText = `${d}`;
undefinedBox.querySelector(".name").innerText = `${(typeof e)}`;
objectBox.querySelector(".name").innerText = `${(typeof f)}`;