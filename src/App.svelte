<script lang="ts">
    import "./app.css";
    import { tick } from 'svelte';
    // import DNA from "./lib/DNA.svelte";
    // import MRNA from "./lib/MRNA.svelte";
    // import AminoAcid from "./lib/AminoAcid.svelte";

    // import { dna, mRNA, aminoAcids } from './lib/store';

    let dna = '';
    // $: dna = dna.toUpperCase();
    $: mRNA = dna.replaceAll('T', 'U');

    /**
     * Based on https://svelte.dev/tutorial/tick
     * @param event
     */
    async function allowValidBase(event: KeyboardEvent) {
        // Save lettername of nitrogenous base
        const base = event.key.toUpperCase();
        // Default action is to 1) insert event.key and 2) move cursor to end of input
        //      while we want to preserve action 1), we only want to move the cursor just one character forward
        event.preventDefault();
        // Reject invalid bases. Character insertion was prevented by event.preventDefault(), so we can just exit function
        if (base !== 'A' && base !== 'T' && base !== 'G' && base !== 'C') {
            return;
        }
        // Save current cursor position
        const { selectionStart, selectionEnd, value } = this;
        // Insert base at cursor position. We have to manually do this because we prevented the default behaviour
        this.value = value.slice(0, selectionStart) + base + value.slice(selectionStart, value.length) ;
        // Wait for DOM to update
        await tick();
        // Move cursor one character forward
        this.selectionStart = selectionStart + 1;
        this.selectionEnd = selectionEnd + 1;
        return;
    }
</script>

<main class="flex flex-col items-center">
	<h1 class="text-3xl font-bold uppercase">dna 2 amino</h1>

    <!-- Input -->
    <!-- <DNA /> -->
    <div class="container flex flex-col items-center">
        <p class="text-center">The DNA sequence is</p>
        <input class="uppercase" type="text" placeholder="DNA ..."
            bind:value={dna}
            on:keypress="{allowValidBase}"
        >
        <!-- <button on:click={emitSequence} >Translate</button> -->
    </div>

    <!-- Transcription: Process of converting DNA to mRNA -->
    <!-- <MRNA /> -->
    <div class="container">
        <p class="text-center">The corresponding mRNA is</p>
        <p class="text-center uppercase">{mRNA}</p>
    </div>

    <!-- Translation: Process of converting mRNA to Amino Acids -->
    <!-- <AminoAcid /> -->
</main>