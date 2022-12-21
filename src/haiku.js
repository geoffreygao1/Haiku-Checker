import { syllable } from 'syllable';

export default class Haiku {
  constructor() {
    this.inputText = "";
    this.lines = [];
    this.syllables = [];
  }

  splitToLines() {
    this.lines = this.inputText.split("\n");

  }

  findSyllables() {
    this.syllables = this.lines.map(x => syllable(x));
  }
}

//Icy afternoon
//A slim flamingo slithers
//whilst watching the snake
//this is wrong

//Text Box to type something in
// Pull the contents of the text box into inputText
// Find a way to see how many lines there are
// Split the lines into an array of lines ["Icy Afternoon", "A slim flamingo slithers", "..."]
// Count the syllables of each line (using syllables package)
// Logic for isHaiku

// Haiku = {
//   'inputText': //Icy afternoon
//   //A slim flamingo slithers
//   //whilst watching the snake
//   //this is wrong
//   ,
//   'lines': ["Icy Afternoon",
//     "A slim flamingo slithers",
//     "..."],
//   'syllables': [
//     5,
//     7,
//     5
//   ]
// }


