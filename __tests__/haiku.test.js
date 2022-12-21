import Haiku from './../src/haiku.js';

describe('Haiku', () => {
  let testHaiku;

  beforeEach(() => {
    testHaiku = new Haiku();
  })

  test('Should create a new Haiku class object with properties of inputText, lines, and syllables', () => {
    expect(testHaiku.inputText).toEqual("");
    expect(testHaiku.lines.length).toEqual(0);
    expect(testHaiku.syllables.length).toEqual("");
  });
});


  // this.inputText = "";
  // this.lines = [];
  // this.syllables = [];
