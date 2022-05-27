<script lang="ts">
    let dnaSeq: string = '';
    // display sequence
    let codons = '';
    let validBases = ['A', 'G', 'T', 'C'];
    let spacer = ' ';

    const groupCodons = (dnaSeq: string) => {
        return dnaSeq.replace(/(.{3})/g, `$1${spacer}`);
    }

    const codonsToDnaSeq = (codons: string) => {
        let regex = new RegExp(`[${spacer}]`, 'g');
        return codons.replace(regex, '');
    }

    const formatSequence = () => {
        codons = codons.toUpperCase();
        if (codons.slice(-1) === spacer) {
            codons = removeTrailingChar(codons, spacer);
            return;
        }
        return;
    }

    const removeTrailingChar = (queryString, character) => {
        // console.info(`Removed trailing ${character}`);
        return queryString.slice(0, -1);
    }

    // BUG: It only checks if last letter is invalid!
    //But you can insert invalid characters in the middle of the string!!!
    const validate = (event: Event) => {
        let inputBox = (event.currentTarget as HTMLInputElement)
        // let caretPosition = inputBox.selectionEnd;
        // console.info('SelectionEnd:', caretPosition);
        let currentCodons = inputBox.value;
        if (currentCodons.slice(-1) === spacer) {
            codons = removeTrailingChar(currentCodons, spacer)
            return;
        }
        let currentSeq = codonsToDnaSeq(currentCodons);
        let currentBaseInput = currentSeq.slice(-1)
        if (!validBases.includes(currentBaseInput.toUpperCase())) {
            // console.info(`Invalid Letter: ${currentBaseInput}`);
            dnaSeq = currentSeq.slice(0, -1);
            codons = groupCodons(dnaSeq);
            return;
        }
        codons = groupCodons(currentSeq);
        formatSequence();
        // inputBox.selectionEnd = caretPosition;
        return;
    }
</script>

<div class="container">
    <input type="text" placeholder="Enter DNA sequence"
        bind:value={codons}
        on:input={validate} 
    >
</div>

<style>

</style>