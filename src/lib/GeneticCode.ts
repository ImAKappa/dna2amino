export class GeneticCode {

    aminoCodonDict: {}

    constructor() {
        // Standard genetic code
      this.aminoCodonDict = { 'A': ['GCA','GCC','GCG','GCT'],
       'C': ['TGC','TGT'], 
       'D': ['GAC', 'GAT'], 
       'E': ['GAA','GAG'], 
       'F': ['TTC','TTT'], 
       'G': ['GGA','GGC','GGG','GGT'],
       'H': ['CAC','CAT'], 
       'I': ['ATA','ATC','ATT'], 
       'K': ['AAA','AAG'], 
       'L': ['CTA','CTC','CTG','CTT','TTA','TTG'], 
       'M': ['ATG'], 
       'N': ['AAC','AAT'], 
       'P': ['CCA','CCC','CCG','CCT'], 
       'Q': ['CAA','CAG'], 
       'R': ['AGA','AGG','CGA','CGC','CGG','CGT'], 
       'S': ['AGC','AGT','TCA','TCC','TCG','TCT'], 
       'T': ['ACA','ACC','ACG','ACT'], 
       'V': ['GTA','GTC','GTG','GTT'], 
       'W': ['TGG'], 
       'Y': ['TAC','TAT'] };
    }

    // Exceptions - see http://eweb.furman.edu/~wworthen/bio111/code.htm

    dna2mrna(dna: string): string {
        let mrna = dna.replaceAll('T', 'U');
        return mrna
    }
}