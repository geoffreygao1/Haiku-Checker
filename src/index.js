import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './../src/haiku.js';


document.querySelector("#haikuForm").addEventListener("submit", haikuHandler);

function haikuHandler(event) {
  event.preventDefault();
  let inputText = document.getElementById("inputText").value;
  let haiku = new Haiku();
  haiku.inputText = inputText;
  haiku.splitToLines();
  haiku.findSyllables();
  if (haiku.lines.length === 3 && haiku.syllables[0] === 5 && haiku.syllables[1] === 7 && haiku.syllables[2] === 5) {
    document.getElementById("result").innerText = 'This is a Haiku';
  } else {
    document.getElementById("result").innerText = 'This is not a Haiku';
  }
}


