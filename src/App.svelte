<script>
    import InputHandler from "./lib/InputHandler.svelte";

	export let name;
</script>

<svelte:head>
	<title>dna2amino</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
    <p>Enter DNA sequence:</p>
    <InputHandler/>


    <p>Ouput amino acid sequence</p>
    <p class="output"></p>
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