<script lang="ts">
	import DarkModeButton from '$lib/DarkModeButton.svelte';
	import HighlightedText from '$lib/HighlightedText.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>@darrelhong</title>
</svelte:head>

<DarkModeButton />
<div class="container">
	<h1>Hi, I'm Darrel Hong</h1>
	<p class="sentence">
		I'm an aspiring <HighlightedText
			href="https://github.com/darrelhong?tab=repositories"
			color="16, 185, 129"
			colorDark="110, 231, 183">software engineer</HighlightedText
		>, <HighlightedText
			href="https://www.linkedin.com/in/darrelhong"
			color="59, 130, 246"
			colorDark="96, 165, 250">web developer</HighlightedText
		> and
		<HighlightedText href="/photography" color="244, 114, 182"
			>photography enthusiast</HighlightedText
		>.
	</p>
	<p class="find-me sentence">
		Find me on <HighlightedText
			color="24, 27, 31"
			colorDark="201, 209, 217"
			href="https://github.com/darrelhong">Github</HighlightedText
		> and <HighlightedText
			color="34, 89, 156"
			colorDark="82, 134, 196"
			href="https://www.linkedin.com/in/darrelhong/">LinkedIn</HighlightedText
		>.
	</p>
</div>
<Footer />

<style>
	:global(:root) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		background-color: white;
		color: #1f2937;
		transition: background-color 0.3s;
		--text-light: #6b7280;
		--text-orange: #d97706;
		--link-hover: #1f2937;
	}

	:global(button) {
		cursor: pointer;
	}

	:global(:root[data-theme='dark']) {
		background-color: #0e1421;
		color: white;
		--text-light: #9ca3af;
		--text-orange: #fcd34d;
		--link-hover: #e5e7eb;
	}
	/* push footer to bottom */
	:global(html) {
		min-height: 100%;
	}

	.container {
		margin-top: 32px;
		width: clamp(16rem, 90vw, 40rem);
		margin-left: auto;
		margin-right: auto;
	}

	h1 {
		font-size: clamp(32px, 6.5vw, 36px);
		font-weight: 600;
	}

	.sentence {
		font-size: clamp(22px, 4.5vw, 24px);
		line-height: 1.5;
	}

	.find-me {
		font-size: clamp(20px, 4.2vw, 22px);
	}
</style>
