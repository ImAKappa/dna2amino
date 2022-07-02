<script lang="ts">
    export let dnaSeq: string = '';
    /* Assumptions about `dnaseq`:
    - contains spaces (which separates 3-base codons)
    - bases are capitalized
    - no invalid bases present (only A, T, C, G)
    */

    const validBases = /^[ATCG]+$/;

    const isValidBases = (dnaSeq: string, seqRegEx: RegExp): boolean => {
        return seqRegEx.test(dnaSeq.replaceAll(' ', ''));
    }

    const toMRNA = (dnaSeq: string): string => {
        if (!isValidBases(dnaSeq, validBases)) return 'invalid base detected';
        // mRNA contains Uracil (U) instead of Thymine (T) in DNA
        let mRNA = dnaSeq.replaceAll('T', 'U');
        return mRNA;
    }
</script>

<div class="mrna-output">
    <h2>mRNA:</h2>
    <p>{toMRNA(dnaSeq)}</p>
</div>

<style>
    
</style>