# DNA2AMINO

Convert dna sequence to amino acids in browser.

## Requirements

User enters string of dna sequences and presses "Transcribe" to convert to mRNA or "Translate" to convert to Amino Acid.

Valid input characters: "A", "T", "G", "C"

## Feature Roadmap

- [ ] Support for non-universal codons.
See [Ohira et al. 2013](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3597805/) for more details.

<details><summary>## Development Notes</summary>
- Webapp created with Svelte, Vite, & TypeScript
- `pnpm` for package manager instead of npm 
</details>