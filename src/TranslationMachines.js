// Translates DNA
class TranslationMachines {
  constructor(geneCodeDict) {
    this.geneCodeDict = geneCodeDict;
  }

  ribosomePairing(codon) {
    // Search keys for matching codon
    for (let key in this.geneCodeDict) {
      let codonArray = this.geneCodeDict[key];
      for (let i=0;i<codonArray.length;i++) {
        if (codonArray[i] === codon) {
          return key;
        }
      }
    }
    return '?'
  }

  ribosomeSlider(transcript) {
    let aminoAcids = [];
    let residue = 'empty';
    for (let i=0; i<=(transcript.length-3); i+=3) {
      residue = this.ribosomePairing(transcript.slice(i, i+3));
      aminoAcids.push(residue);
    }
    return aminoAcids.join('');
  }

  translate(transcript) {
    return this.ribosomeSlider(transcript);
  }
}