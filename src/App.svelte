<script lang="ts">
    import AminoAcidOutput from "./lib/AminoAcidOutput.svelte";
    import DnaInput from "./lib/DNAInput.svelte";
    import MRNAOutput from "./lib/MRNAOutput.svelte";


	export let name: string = "DIO";

    let dnaSeq: string = '';
    let mRNASeq: string = '';
    let aminoAcidSeq: string = '';

    const updateDNA = (event) => {
        dnaSeq = event.detail.dnaSeq;
    }
</script>

<svelte:head>
	<title>dna2amino</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
    <DnaInput on:dna-change={updateDNA} />
    <MRNAOutput {dnaSeq} />

    <AminoAcidOutput />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>