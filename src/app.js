/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Muerte a Prettier!!");

  let pronoum = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let textfor = '<ul class="list-group">';
  textfor +=
    '<li class="list-group-item bg-success text-light">Using for length</li>';
  for (let i = 0; i < ProcessingInstruction.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        textFor +=
          '<li class="list-group-item">' +
          i +
          "-" +
          pronoun[i] +
          j +
          "-" +
          adj[j] +
          k +
          "-" +
          noun[k] +
          "</li>";
      }
    }
  }

  textfor += "</ul>";
  document.querySelector("#for").innerHTML = textfor;

  // Using for of
  let textof = '<ul classs="list-group">';
  textof +=
    '<li class="list-group-item bg-success text-light">Using for of</li>';
  for (constiterator of pronoun) {
    for (const item of adj) {
      for (const element of noun) {
        textof += `
      <li class="list-group-item">
      ${iterator}${item}${element}.com
      </li>`;
      }
    }
  }

  textof += "</ul>";
  document.querySelector("#of").innerHTML = textof;

  // Using method .map()
  let textmap = '<ul class="list-group">';
  textmap +=
    '<li class="list-group-item bg-success text-light">Using textmap</li>';

  pronoun.map(iterator => {
    adj.map(item => {
      noun.map(element => {
        textmap += `
       <li class="list-group-item">
        ${iterator}${item}${element}.com
        </li> `;
      });
    });
  });

  textMap += "</ul>";
  document.querySelector("#map").innerHTML = textMap;
};
