// Instantiate Classes
let geneCode = new GeneticCode();
let translationMachinery = new TranslationMachines(geneCode.aminoCodonDict);

// Input Handling //

let inputBox = document.querySelector('#input-codons');

let butt = document.querySelector('#start-btn');

let clearButt = document.querySelector('#clear-btn');

let inputHandler = new InputHandler(inputBox, butt, clearButt);

let aBtn = document.querySelector('#a-btn').addEventListener('click', () => {
  inputBox.value += 'A';
});

let tBtn = document.querySelector('#t-btn').addEventListener('click', () => {
  inputBox.value += 'T';
});

let cBtn = document.querySelector('#c-btn').addEventListener('click', () => {
  inputBox.value += 'C';
});

let gBtn = document.querySelector('#g-btn').addEventListener('click', () => {
  inputBox.value += 'G';
});

let spaceBtn = document.querySelector('#space-btn').addEventListener('click', () => {
  inputBox.value += ' ';
});

// Other Output things

