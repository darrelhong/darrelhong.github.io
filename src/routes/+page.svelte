<script lang="ts">
	import '../app.css';
	import DarkModeButton from '$lib/DarkModeButton.svelte';
	import HighlightedText from '$lib/HighlightedText.svelte';
	import Footer from '$lib/Footer.svelte';
	import { initTheme } from '$lib/themeSwitcher';

	initTheme();
</script>

<svelte:head>
	<title>@darrelhong</title>
</svelte:head>

<DarkModeButton />
<div class="container">
	<h1>Hi, I'm Darrel</h1>
	<p class="sentence">
		I'm an aspiring <HighlightedText
			href="https://github.com/darrelhong"
			colorVar="--highlight-green"
		>
			software engineer</HighlightedText
		> interested in
		<HighlightedText
			href="https://hdb-resale-prices.fly.dev/resale/resale_prices"
			colorVar="--highlight-blue"
		>
			building
		</HighlightedText>
		<HighlightedText href="https://pizza-dough-calculator.pages.dev" colorVar="--highlight-pink"
			>useful</HighlightedText
		>
		<HighlightedText href="https://supportlocal-sg.pages.dev" colorVar="--highlight-purple"
			>products</HighlightedText
		>.
	</p>

	<p class="find-me sentence">
		Find me on <HighlightedText colorVar="--highlight-github" href="https://github.com/darrelhong">
			GitHub
		</HighlightedText> and
		<HighlightedText colorVar="--highlight-linkedin" href="https://www.linkedin.com/in/darrelhong/">
			LinkedIn</HighlightedText
		>.
	</p>
</div>
<Footer />

<style>
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
