import { writable, derived } from 'svelte/store';

export const dna = writable('');
//@ts-ignore
export const mRNA = derived(dna, $dna => $dna.toUpperCase().replaceAll('T', 'U'));
export const aminoAcids = writable('');