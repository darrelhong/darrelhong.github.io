<script lang="ts">
	export let href: string;
	export let colorVar: string;
</script>

<a rel="external" {href} class="highlight" style="--highlight-color: var({colorVar});"><slot /></a>

<style>
	.highlight {
		text-decoration: none;
		color: rgb(var(--highlight-color));
		box-shadow: 0 10px 0 0 rgb(var(--highlight-color), 0),
			inset 0 -0.125em rgb(var(--highlight-color), 0.2);
		transition-property: box-shadow, color;
		transition-duration: 0.2s;
		border-radius: 1px;
		padding: 0 2px 2px;
	}

	.highlight:hover,
	.highlight:focus {
		color: rgb(var(--highlight-color));
		box-shadow: 0 1px 0 3px rgb(var(--highlight-color), 0.1),
			inset 0 -1.375em 0 rgba(var(--highlight-color), 0.1);
		border-radius: 3px;
	}
</style>
