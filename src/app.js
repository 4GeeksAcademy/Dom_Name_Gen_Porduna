import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  // console.log ("Muerte a Prettier!!");
  let pronoun = ["jodete", "odio"];
  let adj = ["puto", "a"];
  let noun = ["prettier", "prettier"];
  
  // Using for length
  let textfor = '<ul class="list-group">';
  textfor += '<li class="list-group-item bg-primary text-light">Using for length</li>';
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        textfor += '<li class="list-group-item bg-info">' + i + '-' + pronoun[i] + j + '-' + adj[j] + k + '-' + noun[k] + '</li>';
      }
    }
  }
  textfor += '</ul>';
  document.querySelector('#for').innerHTML = textfor;
  
  // Using for of
  let textof =  '<ul class="list-group">';
  textof += '<li class="list-group-item bg-primary text-light">Using for of</li>';
  for (const iterator of pronoun) {
    for (const item of adj) {
      for (const element of noun) {
        textof += `<li class="list-group-item bg-info"> ${iterator}${item}${element}.com </li>`;
      }
    }
  }
  textof += '</ul>';
  document.querySelector ('#of').innerHTML = textof;

  // Using method .map()
  let textmap = '<ul class="list-group">';
  textmap += '<li class="list-group-item bg-primary text-light">Using .map()</li>';
  pronoun.map ((iterator) => {
    adj.map ((item) => {
      noun.map ((element) => {
        textmap += `<li class="list-group-item bg-info"> ${iterator}${item}${element}.com </li>`;
      });
    });
  });
  textmap += '</ul>';
  document.querySelector ('#map').innerHTML = textmap;
};