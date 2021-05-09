<script lang="ts">
	import DarkModeButton from '$lib/DarkModeButton.svelte';
	import HighlightedText from '$lib/HighlightedText.svelte';
</script>

<svelte:head>
	<title>@darrelhong</title>
</svelte:head>

<DarkModeButton />
<h1>Hi, I'm Darrel Hong</h1>
<p>
	I'm a <HighlightedText color="16, 185, 129" colorDark="110, 231, 183"
		>software engineer</HighlightedText
	>, <HighlightedText color="59, 130, 246" colorDark="96, 165, 250">web developer</HighlightedText> and
	<HighlightedText color="244, 114, 182">photography enthusiast</HighlightedText>.
</p>
<p class="find-me">
	Find me on <HighlightedText
		color="34, 89, 156"
		colorDark="82, 134, 196"
		href="https://linkedin.com">LinkedIn</HighlightedText
	> and
	<HighlightedText color="24, 27, 31" colorDark="201, 209, 217" href="https://github.com"
		>Github</HighlightedText
	>.
</p>

<style>
	:global(:root) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		background-color: white;
		color: #1f2937;
		transition: background-color 0.3s;
	}

	:global(button) {
		cursor: pointer;
	}

	:global(:root[data-theme='dark']) {
		background-color: #0e1421;
		color: white;
	}
</style>
