<script lang="ts">
    export let dnaseq: string = '';
    /* Assumptions about `dnaseq`:
    - contains spaces (which separates 3-base codons)
    - bases are capitalized
    - no invalid bases present (only A, T, C, G)
    */

    const validBases = /^[ATCG]+$/;

    const isValidBases = (dnaseq: string, seqRegEx: RegExp): boolean => {
        return seqRegEx.test(dnaseq.replaceAll(' ', ''));
    }

    const toMRNA = (dnaseq: string): string => {
        if (!isValidBases(dnaseq, validBases)) return 'invalid base detected';
        // mRNA contains Uracil (U) instead of Thymine (T) in DNA
        let mRNA = dnaseq.replaceAll('T', 'U');
        return mRNA;
    }
</script>

<div class="mrna-output">
    <h2>mRNA:</h2>
    <p>{toMRNA(dnaseq)}</p>
</div>

<style>
    
</style>