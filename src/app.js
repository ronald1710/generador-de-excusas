/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generadorExcusa(quien, que, cuando) {
  let numeroQuien = Math.floor(Math.random() * quien.length);
  let numeroQue = Math.floor(Math.random() * que.length);
  let numeroCuando = Math.floor(Math.random() * cuando.length);
  return (
    quien[numeroQuien] + " " + que[numeroQue] + " " + " " + cuando[numeroCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = generadorExcusa(who, what, when);
}
onload = onLoad;
