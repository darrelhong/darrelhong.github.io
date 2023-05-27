<footer>
	<p class="links">
		<a class="link" href="https://twitter.com/darrelhong">Twitter</a>
		•
		<a
			class="link"
			href="https://drive.google.com/file/d/1GMBJHTfao0U6FabaA8RytJdRhRAT041S/view?usp=sharing"
			>Résumé</a
		>
	</p>
	<p class="copyright">© All rights reserved.</p>
	<p>
		<a class="built-with" href="https://svelte.dev/"
			>Built with
			<img src="/svelte_horizontal.svg" alt="svelte-logo" height="15" />
		</a>
	</p>
</footer>

<style>
	footer {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		text-align: center;
	}

	.link {
		color: var(--text-orange);
		font-size: 15px;
		text-decoration: none;
		transition: color 0.5s ease;
	}

	.link:hover {
		color: var(--link-hover);
	}

	.copyright {
		color: var(--text-light);
		font-size: 14px;
	}

	.built-with {
		background-color: #f3f4f6;
		border-radius: 3px;
		border: 1px solid #9ca3af;
		padding: 1px 4px;
		text-decoration: none;
		color: #6b7280;
		font-size: 12px;
		display: inline-flex;
		justify-content: center;
	}
</style>
