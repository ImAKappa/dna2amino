class InputHandler {
  constructor(inputBox, translateBtn, clearBtn) {
    // The text field
    this.inputBox = inputBox;
    // Translate Btn
    this.translateBtn = translateBtn.addEventListener('click', () => {
      this.translateSequence(this.inputBox.value.toUpperCase().replace(/\s+/g, ''));
    });
    // Clear Btn
    this.clearBtn = clearBtn.addEventListener('click', () => {
      this.inputBox.value = '';
    });
    // Previous input paragraph
    this.prevInput = document.querySelector('#prev-input');
  }

  /**Checks if input contains only valid nucleotides 
   * Also rejects other special characters
  */
  validInput(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      let checkLetter = inputString.charAt(i);
      if (checkLetter !== "A" && checkLetter !== "T" && checkLetter !== "G" && checkLetter !== "C") {
        return false;
      }
    }
    return true;
  }

  /**Handles input */
  translateSequence(inputString) {
    // Copies last input in case user made some small mistake in attempted input
    this.prevInput.textContent = 'Last input: ' + this.inputBox.value;
    // Validating possible inputs
    if (inputString === '') {
      this.inputBox.value = 'You gonna enter something first?'
    } else if ((inputString.length % 3) !== 0) {
      this.inputBox.value = 'Not divisible by 3. Pls enter 3 nucleotide codons';
    } else if (this.validInput(inputString)) {
      this.inputBox.value = translationMachinery.translate(inputString);
    } else {
      this.inputBox.value = 'Sequence contains invalid nucleotides!';
    }
  }
}